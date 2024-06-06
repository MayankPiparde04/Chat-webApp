import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../context/authContext';
import { Image } from 'expo-image';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const HomeHeader = () => {
    const { user } = useAuth();

    return (
        <View>
            <View className="flex-row justify-between items-center pt-14 px-4 py-4 bg-indigo-400 rounded-b-lg">
                <Text className="text-2xl font-bold text-white">Chat App</Text>
            </View>
            <Menu>
                <MenuTrigger>
                    <View>
                        <Image
                            className='h-40 w-40 aspect-auto rounded-full'
                            source={{ uri: user?.profileUrl }}
                            placeholder={{ blurhash }}
                            transition={500}
                        />
                    </View>
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={() => alert(`Save`)} text='Save' />
                    <MenuOption onSelect={() => alert(`Delete`)} >
                        <Text style={{ color: 'red' }}>Delete</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
                </MenuOptions>
            </Menu>
        </View>
    );
};

export default HomeHeader;
