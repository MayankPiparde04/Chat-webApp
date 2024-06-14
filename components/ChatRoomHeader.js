//Chat room header
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router'

export default function ChatRoomHeader({ user, router }) {
    const item = useLocalSearchParams();
    const openProfile = () => {
        router.push({ pathname: '/userProfile', params: user});
    }
    // console.log(user?.username) 
    // console.log('got data from chat room header', item);
    return (
        <Stack.Screen
            options={{
                title: '',
                headerShadowVisible: false,
                headerLeft: () => (
                    <View className="flex-row items-center gap-4">
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="arrow-back-outline" size={24} color="black" />
                        </TouchableOpacity>
                        <View className="flex-row items-center gap-3">
                            <TouchableOpacity onPress={openProfile}>
                                <Image
                                    source={{ uri: user?.profileUrl }}
                                    style={{ height: hp(4.5), aspectRatio: 1, borderRadius: 100 }}
                                />
                            </TouchableOpacity>
                            <Text style={{ fontSize: hp(2.5) }} className="text-neutral-900 font-med">
                                {user?.username}
                            </Text>
                        </View>
                    </View>
                ),
                headerRight: () => (
                    <View className="flex-row items-center gap-4">
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="video-outline" size={26} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="call-outline" size={22} color="black" />
                        </TouchableOpacity>
                    </View>
                ),
            }}
        />
    );
}

const styles = StyleSheet.create({})