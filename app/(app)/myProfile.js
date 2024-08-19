import { Image, StyleSheet, Text, TouchableOpacity, Dimensions, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useAuth } from '../../context/authContext';
const { width, height } = Dimensions.get('window');


export default function MyProfile() {
    // const { user } = useAuth();
    const router = useRouter();
    const item = useLocalSearchParams();
    const { logout } = useAuth();
    // console.log('from my profile : ',item?.profileUrl)

    const imageSize = {
        width: width > 500 ? 170 : 120,
        height: height > 960 ? 170 : 120,
    };


    const handleLogOut = async () => {
        await logout();
    }
    return (
        <View className='flex-1 bg-gray-100'>
            <Stack.Screen
                options={{
                    title: '',
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <View className="flex-row items-center gap-2">
                            <TouchableOpacity onPress={() => router.back()}>
                                <Ionicons name="arrow-back-outline" size={width > 500 ? 32 : 24} color="black"
                                    className="px-2" />
                            </TouchableOpacity>
                            <Text className='text-2xl md:text-4xl font-semibold'>My Profile</Text>
                        </View>
                    ),
                }}
            />
            <View className="flex-col  bg-slate-100 gap-3 pb-2 items-center border-b border-b-slate-600">
                <View className="items-center mt-3">
                    <Image
                        source={{ uri: item?.profileUrl }}
                        style={imageSize}
                        className="rounded-full m-1" />
                    <Text className='text-3xl md:text-5xl mt-1 md:mt-4 p-1 font-semibold'>{item.username}</Text>
                    <Text className="text-lg md:text-3xl text-gray-800 px-2">{item.contactNo}</Text>
                </View>
            </View>
            <TouchableOpacity>
                <View className='flex justify-center  bg-slate-100  items-start px-5 h-[80] md:h-[100] border-b border-b-slate-600'>
                    <Text className='text-neutral-900 mb-1 font-semibold text-xl md:text-3xl'>About</Text>
                    <Text className='text-neutral-700 text-xl md:text-3xl'>{item.about}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className='flex-row justify-start  bg-slate-100  items-center px-5 h-[60] md:h-[75] border-b border-b-slate-600'>
                    <MaterialIcons name="notifications-none" size={width > 500 ? 32 : 22} color="#25c" />
                    <Text className='text-neutral-800 pl-5 text-xl md:text-3xl'>Notifications</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className='flex-row justify-start  bg-slate-100  items-center px-5 h-[60] md:h-[75] border-b border-b-slate-600'>
                    <MaterialIcons name="audiotrack" size={width > 500 ? 32 : 22} color="#25c" />
                    <Text className='text-neutral-800 pl-5 text-xl md:text-3xl'>Sound</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className='flex-row justify-start  bg-slate-100  items-center px-5 h-[60] md:h-[75] border-b border-b-slate-600'>
                    <MaterialIcons name="storage" size={width > 500 ? 32 : 22} color="#25c" />
                    <Text className='text-neutral-800 pl-5 text-xl md:text-3xl'>Storage & Data</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className='flex-row justify-start  bg-slate-100  items-center px-5 h-[60] md:h-[75] border-b border-b-slate-600'>
                    <MaterialIcons name="security" size={width > 500 ? 32 : 22} color="#25c" />
                    <Text className='text-neutral-800 pl-5 text-xl md:text-3xl'>Security</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className='flex-row justify-start  bg-slate-100  items-center px-5 h-[60] md:h-[75] border-b border-b-slate-600'>
                    <MaterialIcons name="privacy-tip" size={width > 500 ? 32 : 22} color="#25c" />
                    <Text className='text-neutral-800 pl-5 text-xl md:text-3xl'>Privacy</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className='flex-row justify-start  bg-slate-100  items-center px-5 h-[60] md:h-[75] border-b border-b-slate-600'>
                    <Feather name="help-circle" size={width > 500 ? 32 : 22} color="#25c" />
                    <Text className='text-neutral-800 pl-5 text-xl md:text-3xl'>Help</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogOut} Z>
                <View className="flex-row bg-red-600 mx-4 md:mx-8 my-5 md:my-8 w-44 md:w-60 rounded-2xl h-14 md:h-20 text-white text-center justify-center items-center font-semibold">
                    <Text className='text-2xl md:text-4xl text-white font-semibold pr-3'>Log Out</Text>
                    <MaterialCommunityIcons name="logout" size={width > 500 ? 34 : 24} color="#fff" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})