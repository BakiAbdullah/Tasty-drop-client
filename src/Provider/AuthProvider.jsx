import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, isLoading } from "../redux/userSlice";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  updateProfile,
  signInWithPopup,
  signOut,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const googleLogin = () => {
    dispatch(isLoading(true));
    return signInWithPopup(auth, googleProvider);
  };

  const createAccount = (email, password) => {
    dispatch(isLoading(true));
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    dispatch(isLoading(true));
    return signInWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = ({ name, photoUrl }) => {
    dispatch(isLoading(true));
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const facebookLogin = () => {
    dispatch(isLoading(true));
    return signInWithPopup(auth, facebookProvider);
  };

  const githubLogin = () => {
    dispatch(isLoading(true));
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    dispatch(isLoading(true));
    return signOut(auth);
  };

  const handleSearch = async (searchQuery) => {
    try {
      setIsSearching(true);
      const response = await axios.get(
        `${import.meta.env.VITE_LIVE_URL}api/searched-location/${searchQuery}`
      );
      const AllRestaurant = response.data;
      console.log(AllRestaurant);
      searchQuery && setSearchResults(AllRestaurant); //if searchQuery is empty then it will not set the searchResults.
    } catch (error) {
      console.error("search field error:", error);
    }
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(addUser(currentUser));
      dispatch(isLoading(false));
      if (currentUser) {
        axios
          .post(`${import.meta.env.VITE_LIVE_URL}jwt`, {
            email: currentUser?.email,
          })
          .then((res) => {
            localStorage.setItem("access_token", res.data.token);
          });
      } else {
        localStorage.removeItem("access_token");
      }
    });
    return () => {
      subscribe();
    };
  }, [dispatch]);

  const authInfo = {
    createAccount,
    signIn,
    profileUpdate,
    googleLogin,
    logOut,
    facebookLogin,
    githubLogin,
    isSearching,
    handleSearch,
    searchResults,
    setSearchQuery,
    searchQuery,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
