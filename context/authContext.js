import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";

// Create the AuthContext
export const AuthContext = createContext();

// AuthContextProvider component to wrap around the app's component tree
export const AuthContextProvider = ({ children }) => {
    // State variables to manage user and authentication status
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    // useEffect to monitor authentication state changes
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            // display user data to console
            // console.log('Got user:', user);
            if (user) {
                setIsAuthenticated(true);
                setUser(user);
                updateUserData(user.uid);
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
        });
        return unsub;
    }, []);

    // Function to handle user login
    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return { success: true };
        } catch (e) {
            let msg = e.message;
            if (msg.includes('(auth/user-not-found)')) msg = 'User not found';
            if (msg.includes('(auth/invalid-email)')) msg = 'Invalid email';
            if (msg.includes('(auth/invalid-credential)')) msg = 'Invalid credential';
            if (msg.includes('(auth/wrong-password)')) msg = 'Incorrect password';
            return { success: false, msg };
        }
    };
    // Function to update user data
    const updateUserData = async (userId) => {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let data = docSnap.data();
            setUser({ ...user, username: data.username, userId: data.userId });
            // console.log('User data updated:', data);
        }
    }

    // Function to handle user logout
    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            return { success: true };
        } catch (e) {
            return { success: false, msg: e.message, error: e };
        }
    };

    // Function to handle user registration
    const register = async (username, email, password) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log('response.user:', response?.user);

            // Store user information in Firestore
            await setDoc(doc(db, "users", response?.user?.uid), {
                username,
                userId: response?.user?.uid
            });
            return { success: true, data: response?.user };
        } catch (e) {
            let msg = e.message;
            if (msg.includes('(auth/invalid-email)')) msg = 'Invalid Email';
            if (msg.includes('(auth/email-already-in-use)')) msg = 'Email is already registered';
            if (msg.includes('(auth/weak-password)')) msg = 'Weak password';
            return { success: false, msg };
        }
    };

    // Provide the context value to children components
    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    const value = useContext(AuthContext);

    if (!value) {
        throw new Error('useAuth must be wrapped inside AuthContextProvider');
    }
    return value;
};
