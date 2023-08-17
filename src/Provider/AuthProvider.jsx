import { createContext, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addUser, isLoading } from "../redux/userSlice";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, updateProfile, signInWithPopup, signOut, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {

    const dispatch = useDispatch()

    const googleLoing = () => {
        dispatch(isLoading(true))
        return signInWithPopup(auth, googleProvider)
    }
    const createAccount = (email, password) => {
        dispatch(isLoading(true))
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        dispatch(isLoading(true))
        return signInWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = ({ name, photoUrl }) => {
        dispatch(isLoading(true))
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photoUrl })
    }
    const facebookLogin = () => {
        dispatch(isLoading(true))
        return signInWithPopup(auth,facebookProvider)
    }
    const githubLogin = ()=>{
        dispatch(isLoading(true))
        return signInWithPopup(auth,githubProvider)
    }
    const logOut = () => {
        dispatch(isLoading(true))
        return signOut(auth)
    }
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, currentUser => {
            dispatch(addUser(currentUser))
            
            if(currentUser){
                axios.post(`${import.meta.env.VITE_LIVE_URL}jwt`,{email:currentUser?.email})
                .then(res=>{
                    dispatch(isLoading(false))
                    localStorage.setItem('access_token',res.data.token)
                })
            }
            else{
                localStorage.removeItem('access_token')
            }
        })
        return () => {
            subscribe()
        }
    }, [dispatch])

    const authInfo = {
        createAccount,
        signIn,
        profileUpdate,
        googleLoing,
        logOut,
        facebookLogin,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;