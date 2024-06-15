//Home header

import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/authContext';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { UserContext } from '../context/UserContext';
import { Feather, MaterialIcons } from '@expo/vector-icons';
// import ProfilePage

const Divider = () => {
    return (
        <View className='w-full bg-neutral-200 p-[1px]' />
    )
}


const HomeHeader = () => {
    const { user, logout } = useAuth();
    const router = useRouter();
    // const { state, dispatch } = useContext(UserContext);
    // console.log('from home header : ', user?.profileUrl)
    const handleProfile = () => {
        router.push('profile');
    }

    const openProfile = () => {
        router.push({ pathname: '/myProfile', params: user });
    }


    return (
        <View>
            <View className="flex-row items-center justify-between pt-12 px-4 py-2 rounded-b-lg bg-indigo-700">
                <Text className="text-3xl font-bold text-white">Chat App</Text>
                <TouchableOpacity
                    onPress={openProfile}
                >
                    <Image
                        className="h-14 w-14 aspect-auto bg-neutral-100 rounded-full"
                        source={{ uri: user?.profileUrl }}
                        transition={500}
                    />
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default HomeHeader;