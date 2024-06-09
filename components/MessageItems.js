import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import React from 'react'

export default function MessageItems({ message, currentUser }) {
    if (currentUser?.userId == message?.userId) {
        // My messages
        return (
            <View className="flex-row justify-end mb-2 mr-2">
                <View style={{ width: wp(80) }}>
                    <View className="flex self-end p-3 rounded-xl bg-green-200 border border-neutral-300">
                        <Text style={{ fontSize: hp(1.9) }} className='text-black'>
                            {message?.text}
                        </Text>
                    </View>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{ width: wp(80) }} className="mb-2 ml-2">
                <View className="flex self-start p-3 rounded-xl bg-indigo-50 border border-indigo-200">
                    <Text style={{ fontSize: hp(1.9) }} className='text-black'>
                        {message?.text}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})