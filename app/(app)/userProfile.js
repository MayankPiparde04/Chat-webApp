import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useAuth } from '../../context/authContext';


export default function UserProfile() {
    // const { user } = useAuth();
    const router = useRouter();
    const item = useLocalSearchParams();

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
                            <Text className='text-2xl font-semibold'>Profile</Text>
                        </View>
                    ),
                }}
            />
            <View className="flex-col items-center bg-slate-100 h-[270] gap-4 border-b border-b-slate-600">
                <View className="items-center mt-5">
                    <Image
                        source={{ uri: item?.profileUrl }}
                        style={{ width: hp('14%'), height: hp('14%'), borderRadius: hp('14%'), paddingTop: hp(4) }} />
                    <Text className='text-3xl pt-4 font-semibold'>{item?.username}</Text>
                    {/* <Text className="text-base text-gray-800">{item?.phone}</Text> */}
                </View>
                <View className='flex-row gap-4 justify-between items-center'>
                    <TouchableOpacity >
                        <View className="flex-col border border-gray-400 bg-indigo-100 w-[75] h-[60] justify-center rounded-lg items-center gap-2">
                            <Ionicons name="call-outline" size={24} color="#097" />
                            <Text className='text-base text-neutral-800 font-semibold'>Audio</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="flex-col border border-gray-400 bg-indigo-100 w-[75] h-[60] justify-center rounded-lg items-center gap-2">
                            <Feather name="video" size={24} color="#097" />
                            <Text className='text-base text-neutral-800 font-semibold'>Video</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="flex-col border border-gray-400 bg-indigo-100 w-[75] h-[60] justify-center rounded-lg items-center gap-2">
                            <FontAwesome name="rupee" size={24} color="#097" />
                            <Text className='text-base text-neutral-800 font-semibold'>Pay</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="flex-col border border-gray-400 bg-indigo-100 w-[75] h-[60] justify-center rounded-lg items-center gap-2">
                            <Ionicons name="search" size={24} color="#097" />
                            <Text className='text-base text-neutral-800 font-semibold'>Search</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity>
                <View className='flex justify-center  bg-slate-100  items-start px-5 h-[60] border-b border-b-slate-600'>
                    <Text className='text-neutral-800 text-xl'>About</Text>
                    <Text className='text-neutral-500 text-md'>Time</Text>
                </View>
            </TouchableOpacity>
            <View>
                <TouchableOpacity>
                    <View className='flex-row  justify-start  bg-slate-100  items-center px-5 h-[60] '>
                        <MaterialIcons name="notifications-none" size={22} color="#d39" />
                        <Text className='text-neutral-800 pl-4 text-xl'>Notifications</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View className='flex-row justify-start  bg-slate-100  items-center px-5 h-[60] border-b border-b-slate-600'>
                        <MaterialIcons name="perm-media" size={22} color="#d39" />
                        <Text className='text-neutral-800 pl-4 text-xl'>Media visibility</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <View className='flex-row justify-start  bg-slate-100  items-center px-5 h-[60] border-b border-b-slate-600'>
                    <MaterialIcons name="block-flipped" size={24} color="#e11" />
                    <Text className='text-red-800 pl-4 text-xl'>Block</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className='flex-row justify-start  bg-slate-100  items-center px-5 h-[60] border-b border-b-slate-600'>
                    <MaterialIcons name="report" size={24} color="#e11" />
                    <Text className='text-red-800 pl-4 text-xl'>Report</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({})