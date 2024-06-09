import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useContext } from 'react';
// import {Image} from 'expo-image'
// import { UserContext } from '../context/UserContext'; 


export default function ChatItem({ item, router, noBorder }) {
    // const { state, dispatch } = useContext(UserContext);
    // console.log('from chat Items : ', item);

    const openChatRoom = () => {
        router.push({ pathname: '/chatRoom', params: item });
    }

    return (
        <TouchableOpacity onPress={openChatRoom}>
            <View className={`flex-row mx-3 items-cente justify-between gap-3 mb-2 pb-2 ${noBorder ? '' : 'border-b border-b-black'}`}>
                <View>
                    <Image
                        source={{ uri: item?.profileUrl }}
                        // source={require('../assets/images/Profilepic.jpg')}
                        style={{ height: hp(6), width: hp(6) }}
                        className='rounded-full' />
                </View>
                <View className='flex-1 gap-1'>
                    <View className='flex-row justify-between'>
                        <Text className='text-neutral-900 font-semibold'>{item?.username}</Text>
                        <Text className='text-neutral-900 font-semibold'>Time</Text>
                    </View>
                    <View className='flex-row justify-start h-7 items-center px-2'>
                        <Text className='text-neutral-900 font-semibold'>Last Message</Text>
                    </View>
                </View>
            </View >
        </TouchableOpacity>

    )
}