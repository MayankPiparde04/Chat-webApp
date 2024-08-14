import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import React from 'react'

export default function MessageItems({ message, currentUser }) {
    if (currentUser?.userId == message?.userId) {
        // My messages
        return (
            <View className="flex-row justify-end mb-2 mr-2">
                <View className='w-[70%] md:w-[75%]'>
                    <View className="flex self-end p-3 rounded-xl bg-green-200 shadow shadow-black border-b-2 border-r-2 border-green-700">
                        <Text className='text-neutral-800 text-xl md:text-3xl'>
                            {message?.text}
                        </Text>
                    </View>
                </View>
            </View>
        )
    } else {
        return (
            <View className="mb-2 ml-2 w-[70%] md:w-[75%]">
                <View className="flex self-start p-3 rounded-xl bg-orange-200 shadow shadow-black border-l-2 border-b-2 border-orange-700">
                    <Text className='text-neutral-800 text-xl md:text-3xl'>
                        {message?.text}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})