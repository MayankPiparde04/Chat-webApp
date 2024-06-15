// _layoutimport from app
import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import '../global.css';
import { MenuProvider } from 'react-native-popup-menu';
// import { UserProvider } from '../context/UserContext';
import { AuthContextProvider, useAuth } from '../context/authContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const MainLayout = () => {
    const { isAuthenticated } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if (typeof isAuthenticated === 'undefined') return;

        const inApp = segments[0] === '(app)';

        if (isAuthenticated && !inApp) {
            router.push('home');
        } else if (isAuthenticated === false) {
            router.push('login');
        }
    }, [isAuthenticated,router]);

    return <Slot />;
};

const _layout = () => {
    return (
        // <UserProvider>
            <AuthContextProvider>
                <MenuProvider >
                    <MainLayout/>
                </MenuProvider>
            </AuthContextProvider>
        // </UserProvider>
    );
};

export default _layout;

const styles = StyleSheet.create({});
