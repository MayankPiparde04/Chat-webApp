import { createContext, useContext, useEffect, useState } from "react";

import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

import { doc, getDoc, setDoc } from "firebase/firestore";

import { db, auth } from "../firebaseConfig";

export const AuthContext = createContext();



export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setisAuthenticated] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setisAuthenticated(true);
                setUser(user);
            } else {
                setisAuthenticated(false);
                setUser(null);

            }
        });
        return unsub;
    }, [])


    const login = async (email, password) => {
        try {

        } catch (e) {

        }
    }
    const logout = async () => {
        try {

        } catch (e) {

        }
    }
    const register = async (name, email, password, profileURL) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log('responce.user :', response?.user);

            await setDoc(doc(db, 'users', response?.user?.uid), {
                username,
                userId: response?.user?.uid,
            });
            return { success: true, data: response?.user };
        } catch (e) {
            let msg = e.message;
            if(msg.includes('(auth/invalid-email)')) msg='Invalid Email';
            return { success: false, msg };
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
            {children}
        </AuthContext.Provider >

    )
}

export const useAuth = () => {
    const value = useContext(AuthContext)

    if (!value) {
        throw new Error('useAuth must be wrapped inside AuthCotextProvider')
    }
    return value;
}