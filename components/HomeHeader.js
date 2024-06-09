import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { useAuth } from '../context/authContext';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { UserContext } from '../context/UserContext';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { MenuItem } from './CustomMenuItems'

import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

const Divider = () => {
    return (
        <View className='w-full bg-neutral-200 p-[1px]' />
    )
}


const HomeHeader = () => {
    const { user, logout } = useAuth();
    const router = useRouter();
    const { state, dispatch } = useContext(UserContext);
    // console.log('from home header : ', user)

    const handleProfile = () => {

    }
    const handleLogOut = async () => {
        await logout();
        router.push('signIn'); // Redirect to sign-in screen after logout
    }
    return (
        <View>
            <View className="flex-row items-center justify-between pt-8 px-4 py-2 rounded-b-lg bg-indigo-700">
                <Text className="text-3xl font-bold text-white">Chat App</Text>
                <Menu>
                    <MenuTrigger>
                        <Image
                            className="h-14 w-14 aspect-auto bg-neutral-100 rounded-full"
                            source={{ uri: user?.profileUrl }}
                            transition={500}
                        />
                    </MenuTrigger>
                    <MenuOptions
                        customStyles={{
                            optionsContainer: {
                                borderRadius: 7,
                                borderCurve: 'continuous',
                                marginTop: 55,
                                marginLeft: -15,
                                backgroundColor: '#fefefe',
                                shadowOpacity: 0.2,
                                shadowOffset: { width: 0, height: 0 },
                                width: 140
                            }
                        }}
                    >
                        <MenuItem
                            text="Profile"
                            action={handleProfile}
                            value={null}
                            icon={<Feather name='user' size={20} color='black' />}
                        />
                        <Divider />
                        <MenuItem
                            text="Log out"
                            action={handleLogOut}
                            value={null}
                            icon={<MaterialIcons name='logout' size={20} color='black' />}
                        />
                    </MenuOptions>
                </Menu>
            </View>
            <Text>{user?.username}</Text>
        </View >
    );
};

export default HomeHeader;
