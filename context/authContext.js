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
    const register = async (username, email, password, profileURL) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log('responce.user :', response?.user);
            console.log(email);

            await setDoc(doc(db, "users", response?.user?.uid), {
                username,
                userId: response?.user?.uid
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




// import { createContext, useContext, useEffect, useState } from "react";
// import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { db, auth } from "../firebaseConfig";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [isAuthenticated, setIsAuthenticated] = useState(null);

//     useEffect(() => {
//         const unsub = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setIsAuthenticated(true);
//                 setUser(user);
//             } else {
//                 setIsAuthenticated(false);
//                 setUser(null);
//             }
//         });
//         return unsub;
//     }, []);

//     const login = async (email, password) => {
//         try {
//             const response = await signInWithEmailAndPassword(auth, email, password);
//             setUser(response.user);
//             setIsAuthenticated(true);
//             return { success: true, data: response.user };
//         } catch (e) {
//             let msg = e.message;
//             if (msg.includes('(auth/invalid-email)')) msg = 'Invalid Email';
//             if (msg.includes('(auth/user-not-found)')) msg = 'User not found';
//             if (msg.includes('(auth/wrong-password)')) msg = 'Incorrect password';
//             return { success: false, msg };
//         }
//     };

//     const logout = async () => {
//         try {
//             await auth.signOut();
//             setUser(null);
//             setIsAuthenticated(false);
//         } catch (e) {
//             console.log('Error logging out:', e);
//         }
//     };

//     const register = async (username, email, password, profileURL) => {
//         try {
//             const response = await createUserWithEmailAndPassword(auth, email, password);
//             console.log('response.user :', response?.user);

//             await setDoc(doc(db, "users", response?.user?.uid), {
//                 username,
//                 userId: response?.user?.uid,
//                 profileURL // Store profile URL if provided
//             });
//             return { success: true, data: response?.user };
//         } catch (e) {
//             let msg = e.message;
//             if (msg.includes('(auth/invalid-email)')) msg = 'Invalid Email';
//             if (msg.includes('(auth/email-already-in-use)')) msg = 'Email already in use';
//             if (msg.includes('(auth/weak-password)')) msg = 'Weak password';
//             return { success: false, msg };
//         }
//     };

//     return (
//         <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const value = useContext(AuthContext);

//     if (!value) {
//         throw new Error('useAuth must be wrapped inside AuthContextProvider');
//     }
//     return value;
// };
