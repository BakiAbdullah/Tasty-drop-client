import { createContext, useEffect, useState } from "react";

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
import { useRole } from "../api/useRole";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log(user);
    setLoading(true);
    if (user) useRole(user?.email).then((data) => setUserRole(data));
  }, [user]);

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createAccount = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = ({ name, photoUrl }) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setLoading(true);
    setUserRole("");
    return signOut(auth);
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);

      setUser(currentUser);

      if (currentUser) {
        axios
          .post(`${import.meta.env.VITE_LIVE_URL}jwt`, {
            email: currentUser?.email,
          })
          .then((res) => {
            localStorage.setItem("access_token", res.data.token);
            if (res) {
              setUser(currentUser);
              setLoading(false);
            }
          });
      } else {
        localStorage.removeItem("access_token");
        setLoading(false);
      }
    });
    return () => {
      subscribe();
    };
  }, []);

  const authInfo = {
    createAccount,
    signIn,
    profileUpdate,
    googleLogin,
    logOut,
    facebookLogin,
    githubLogin,
    user,
    isLoading,
    userRole,
    setUserRole,
    setLoading,
    auth,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
