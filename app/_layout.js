import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, router, useRouter, useSegments } from "expo-router";
import '../global.css';
import { AuthContextProvider, useAuth } from '../context/authContext';
import SignIn from './signIn';

const MainLayout = () => {
    const {isAuthenticated} = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(()=>{
        // check user is authenticaed or not
        
        if ( typeof isAuthenticated === 'undefined') return;

        const inApp = segments[0] === '(app)';

        if ( isAuthenticated && !inApp){
            // redirect to home
            router.replace('home')
        }
        else if( isAuthenticated == false){
            // redirect to signIn
            router.replace('signIn')
        }


    },[isAuthenticated])

    return <Slot />
}


const _layout = () => {
    return (
        <AuthContextProvider >
            < MainLayout /> 
        </AuthContextProvider>
    )
}

export default _layout

const styles = StyleSheet.create({})