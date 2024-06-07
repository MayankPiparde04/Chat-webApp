import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ChatItem({ item }) {
    return (
        <TouchableOpacity className='flex-row  h-10 w-full bg-slate-500'>
            <Text className=' text-red-600'>ChatItem</Text>
            <Image
                className='w-16 h-16 absolute justify-center items-center'
                source={require('../assets/images/Icon.png')}
                style={{ aspectRatio: 1 }}
            />
            <View className='flex-1 gap-1'>
                <View className='flex-row justify-between'>

                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})