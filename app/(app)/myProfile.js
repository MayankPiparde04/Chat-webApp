import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useAuth } from '../../context/authContext';


export default function MyProfile() {
    // const { user } = useAuth();
    const router = useRouter();
    const item = useLocalSearchParams();
    const { logout } = useAuth();
    // console.log('from my profile : ',item?.profileUrl)

    const handleLogOut = async () => {
        await logout();
    }
    return (
        <View className='flex-1 bg-white'>
            <Stack.Screen
                options={{
                    title: '',
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <View className="flex-row items-center gap-2">
                            <TouchableOpacity onPress={() => router.back()}>
                                <Ionicons name="arrow-back-outline" size={24} color="#111" />
                            </TouchableOpacity>
                            <Text className='text-2xl font-semibold'>My Profile</Text>
                        </View>
                    ),
                }}
            />
            <View className="flex-col  bg-slate-100 gap-3 pb-2 items-center border-b border-b-slate-600">
                <View className="items-center mt-5">
                    <Image
                        source={{ uri: item?.profileUrl }}
                        style={{ width: hp('14%'), height: hp('14%'), borderRadius: hp('14%'), paddingTop: hp(4)}}
                        className="border border-black" />
                    <Text className='text-3xl pt-4 font-semibold'>{item.username}</Text>
                    <Text className="text-gray-800">{item.contactNo}</Text>
                </View>
            </View>
            <TouchableOpacity>
                <View className='flex justify-center  bg-slate-100  items-start px-5 h-[80] border-b border-b-slate-600'>
                    <Text className='text-neutral-900 mb-1 font-bold text-xl'>About</Text>
                    <Text className='text-neutral-700 text-xl'>{item.about}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className='flex-row  justify-start  bg-slate-100  items-center px-5 h-[60] border-b border-b-slate-600'>
                    <MaterialIcons name="notifications-none" size={22} color="#25c" />
                    <Text className='text-neutral-800 pl-4 text-xl'>Notifications</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className='flex-row  justify-start  bg-slate-100  items-center px-5 h-[60] border-b border-b-slate-600'>
                    <MaterialIcons name="audiotrack" size={22} color="#25c" />
                    <Text className='text-neutral-800 pl-4 text-xl'>Sound</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className='flex-row  justify-start  bg-slate-100  items-center px-5 h-[60] border-b border-b-slate-600'>
                    <MaterialIcons name="storage" size={22} color="#25c" />
                    <Text className='text-neutral-800 pl-4 text-xl'>Storage & Data</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className='flex-row  justify-start  bg-slate-100  items-center px-5 h-[60] border-b border-b-slate-600'>
                    <MaterialIcons name="security" size={22} color="#25c" />
                    <Text className='text-neutral-800 pl-4 text-xl'>Security</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className='flex-row  justify-start  bg-slate-100  items-center px-5 h-[60] border-b border-b-slate-600'>
                    <MaterialIcons name="privacy-tip" size={22} color="#25c" />
                    <Text className='text-neutral-800 pl-4 text-xl'>Privacy</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className='flex-row  justify-start  bg-slate-100  items-center px-5 h-[60] border-b border-b-slate-600'>
                    <Feather name="help-circle" size={22} color="#25c" />
                    <Text className='text-neutral-800 pl-4 text-xl'>Help</Text>
                </View> 
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogOut}Z>
                <View className="flex-row bg-red-500 mx-4 my-4 w-44 rounded-2xl h-14 text-white text-center justify-center items-center font-semibold">
                    <Text className='text-2xl text-white font-semibold pr-3'>Log Out</Text>
                    <MaterialCommunityIcons name="logout" size={24} color="#fff" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})