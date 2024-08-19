import { Image, StyleSheet, Text, TouchableOpacity, Dimensions, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { Feather, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
const { width, height } = Dimensions.get('window');


export default function UserProfile() {
    // const { user } = useAuth();
    const router = useRouter();
    const item = useLocalSearchParams();
    // console.log('from user profile ', item.about)

    const imageSize = {
        width: width > 500 ? 170 : 120,
        height: height > 960 ? 170 : 120,
    };

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
                            <Text className='text-2xl md:text-4xl font-semibold'>Profile</Text>
                        </View>
                    ),
                }}
            />
            <View className="flex-col  bg-slate-100 gap-3 pb-2 items-center border-b border-b-slate-600">
                <View className="items-center mt-3">
                    <Image
                        source={{ uri: item?.profileUrl }}
                        style={imageSize}
                        className=" rounded-full m-1" />
                    <Text className='text-3xl md:text-5xl mt-1 md:mt-4 p-1 font-semibold'>{item.username}</Text>
                    <Text className="text-lg md:text-3xl text-gray-800 px-2">{item.contactNo}</Text>
                </View>
                <View className='flex-row gap-4 justify-between items-center my-2'>
                    <TouchableOpacity >
                        <View className="flex-col border border-neutral-700 bg-indigo-100
                         w-[80] md:w-[120] h-[65] md:h-[95] justify-center rounded-xl md:rounded-2xl items-center gap-2">
                            <Ionicons name="call-outline" size={width > 500 ? 34 : 24} color="#25c" />
                            <Text className='text-md md:text-2xl text-neutral-800 font-semibold'>Audio</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="flex-col border border-neutral-700 bg-indigo-100
                         w-[80] md:w-[120] h-[65] md:h-[95] justify-center rounded-xl md:rounded-2xl items-center gap-2">
                            <Feather name="video" size={width > 500 ? 34 : 24} color="#25c" />
                            <Text className='text-md md:text-2xl text-neutral-800 font-semibold'>Video</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="flex-col border border-neutral-700 bg-indigo-100
                         w-[80] md:w-[120] h-[65] md:h-[95] justify-center rounded-xl md:rounded-2xl items-center gap-2">
                            <FontAwesome name="rupee" size={width > 500 ? 34 : 24} color="#25c" />
                            <Text className='text-md md:text-2xl text-neutral-800 font-semibold'>Pay</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="flex-col border border-neutral-700 bg-indigo-100
                         w-[80] md:w-[120] h-[65] md:h-[95] justify-center rounded-xl md:rounded-2xl items-center gap-2">
                            <Ionicons name="search" size={width > 500 ? 34 : 24} color="#25c" />
                            <Text className='text-md md:text-2xl text-neutral-800 font-semibold'>Search</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity>
                <View className='flex justify-center  bg-slate-100  items-start px-5 h-[80] md:h-[100] border-b border-b-slate-600'>
                    <Text className='text-neutral-900 mb-1 font-semibold text-xl md:text-3xl'>About</Text>
                    <Text className='text-neutral-700 text-xl md:text-4xl'>{item.about}</Text>
                </View>
            </TouchableOpacity>
            <View>
                <TouchableOpacity>
                    <View className='flex-row  justify-start  bg-slate-100  items-center px-5 h-[60] md:h-[75] '>
                        <MaterialIcons name="notifications-none" size={width > 500 ? 32 : 22} color="#25c" />
                        <Text className='text-neutral-800 pl-5 text-xl md:text-3xl'>Notifications</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View className='flex-row justify-start  bg-slate-100  items-center px-5 h-[60] md:h-[75] border-b border-b-slate-600'>
                        <MaterialIcons name="perm-media" size={width > 500 ? 32 : 22} color="#25c" />
                        <Text className='text-neutral-800 pl-5 text-xl md:text-3xl'>Media visibility</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <View className='flex-row justify-start  bg-slate-100  items-center px-5 h-[60] md:h-[75] border-b border-b-slate-600'>
                    <MaterialIcons name="block-flipped" size={width > 500 ? 34 : 24} color="#e11" />
                    <Text className='text-red-800 pl-5 text-xl md:text-3xl'>Block {item.username}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className='flex-row justify-start  bg-slate-100  items-center px-5 h-[60] md:h-[75] border-b border-b-slate-600'>
                    <MaterialIcons name="report" size={width > 500 ? 34 : 24} color="#e11" />
                    <Text className='text-red-800 pl-5 text-xl md:text-3xl'>Report {item.username}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({})