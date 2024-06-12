import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useAuth } from '../../context/authContext';


export default function Profile() {
    const { user } = useAuth();
    const router = useRouter();
    const item = useLocalSearchParams();

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
                    </View>
                ),
                headerRight: () => (
                    <View className="flex-row items-center gap-4">
                        <View className='justify-center '>
                            <Text className='text-2xl'>
                                {user?.username}
                            </Text>
                        </View>
                    </View>
                ),
            }}
        />
    )
}

const styles = StyleSheet.create({})