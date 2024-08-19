import { Image, StyleSheet, Text, TouchableOpacity, Dimensions, View } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
const { width, height } = Dimensions.get('window');

export default function ChatRoomHeader({ user }) {
    const router = useRouter(); // Use useRouter hook for navigation

    const openProfile = () => {
        router.push({ pathname: '/userProfile', params: user });
    }

    const imageSize = {
        width: width > 500 ? 70 : 50,
        height: height > 960 ? 70 : 50,
    };

    return (
        <Stack.Screen
            options={{
                title: '',
                headerShadowVisible: false,
                headerLeft: () => (
                    <View className="flex-row items-center py-2">
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="arrow-back-outline" size={width > 500 ? 32 : 24} color="black"
                                className="pr-3 md:pr-6" />
                        </TouchableOpacity>
                        <View className="flex-row items-center">
                            <TouchableOpacity onPress={openProfile}>
                                <Image
                                    source={{ uri: user?.profileUrl }}
                                    style={imageSize}
                                    className='rounded-full'
                                />
                            </TouchableOpacity>
                            <Text className="text-neutral-900 pl-4 md:pl-8 font-semibold text-2xl md:text-4xl">
                                {user?.username}
                            </Text>
                        </View>
                    </View>
                ),
                headerRight: () => (
                    <View className="flex-row items-center py-2">
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="video-outline" size={width > 500 ? 40 : 30} color="black"
                                className="pr-4 md:pr-8" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="call-outline" size={width > 500 ? 30 : 22} color="black"
                                className="pr-4 md:pr-8" />
                        </TouchableOpacity>
                    </View>
                ),
            }}
        />
    );
}

const styles = StyleSheet.create({});
