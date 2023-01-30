import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth'


export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [product, setProduct] = useState({});
    const [total, setTotal] = useState(0);
    const [openSideModal, setOpenSideModal] = useState(false);
    const [productCountity, setProductCountity] = useState(1);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const GoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const facebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        createUser,
        userLogin,
        user,
        logOut,
        emailVerify,
        updateUser,
        GoogleLogin,
        loading,
        facebookLogin,
        refresh,
        setRefresh,
        product,
        setProduct,
        openModal,
        setOpenModal,
        total,
        setTotal,
        openSideModal,
        setOpenSideModal,
        productCountity,
        setProductCountity
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;