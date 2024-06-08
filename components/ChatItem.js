import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useContext } from 'react';
// import {Image} from 'expo-image'
import { UserContext } from '../context/UserContext';


export default function ChatItem({ item, index }) {
    const { state, dispatch } = useContext(UserContext);
    // console.log(item?.profileUrl);

    return (
        <TouchableOpacity>
            <View
                className='flex-row w-full 
            items-center
            px-2 py-1 m-px
            bg-green-50'
                style={{
                    borderWidth: 1,
                    borderColor: 'black'
                }}>
                <Image
                    source={state?.users?.profileUrl}
                    // source={require('../assets/images/Profilepic.jpg')}
                    style={{
                        height: hp(6),
                        width: hp(6),
                    }}
                    className='rounded-full'
                />
                <View
                    className='flex-1 ml-1'
                    style={{
                        borderWidth: 1,
                        borderColor: 'red'
                    }}>
                    <View className='flex-row justify-between h-7 px-2 items-center'>
                        <Text className='text-neutral-900 font-semibold'>Mayank</Text>
                        <Text className='text-neutral-900 font-semibold'>Time</Text>
                    </View>
                    <View className='flex-row justify-start h-7 items-center px-2'>
                        <Text className='text-neutral-900 font-semibold'>Last Message</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
