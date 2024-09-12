// _layoutimport from app
import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { Slot, Stack, useRouter, useSegments } from 'expo-router';
import '../global.css';
import { MenuProvider } from 'react-native-popup-menu';
import { AuthContextProvider, useAuth } from '../context/authContext';
// import { ConvexProvider, ConvexReactClient } from 'convex/react';

// const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL, {
//     unsavedChangesWarning: false,
// })


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
    }, [isAuthenticated, router]);

    return <Slot />;
};

const _layout = () => {
    return (
            <AuthContextProvider>
                <MenuProvider >
                    <MainLayout />
                </MenuProvider>
            </AuthContextProvider>
    );
};

export default _layout

const styles = StyleSheet.create({});
