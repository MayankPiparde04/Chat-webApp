//Home header

import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useAuth } from '../context/authContext';
import { useRouter } from 'expo-router';

const Divider = () => {
    return (
        <View className='w-full bg-neutral-200 p-[1px]' />
    )
}


const HomeHeader = () => {
    const { user, logout } = useAuth();
    const router = useRouter();
    // console.log('from home header : ', user?.profileUrl)
    const handleProfile = () => {
        router.push('profile');
    }

    const openProfile = () => {
        router.push({ pathname: '/myProfile', params: user });
    }


    return (
        <View>
            <View className="flex-row items-end pb-2 md:pb-4 px-6 h-[110] md:h-[125] justify-between shadow shadow-slate-600 bg-indigo-700">
                <Text className="text-3xl md:text-5xl font-bold text-white">Chat App</Text>
                <View>
                    <TouchableOpacity
                        onPress={openProfile}
                    >
                        <Image
                            className="h-16 md:h-20 w-16 md:w-20 rounded-full"
                            source={{ uri: user?.profileUrl }}
                            transition={300}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
};

export default HomeHeader;