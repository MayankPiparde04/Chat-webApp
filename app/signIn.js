import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Entypo } from '@expo/vector-icons'
import { router, useRouter } from 'expo-router';

const SignIn = () => {
  const router = useRouter();
  return (
    <View className='flex-1 justify-center items-center bg-slate-50 gap-6'>
      <Text className='text-3xl font-bold'>Sign In</Text>
      <View style={{ height: hp(6), width: wp(90) }} className='flex-row items-center px-4 bg-slate-200 rounded-xl text-neutral-900'>
        <Entypo name='mail' color={'grey'} size={22} />
        <TextInput
          style={{ fontSize: hp(2) }}
          placeholder='Enter your email address'
          placeholderTextColor={'#433'}
          className='flex-1 px-4'
        />
      </View>

      <View className='gap-3'>
        <View style={{ height: hp(6), width: wp(90) }} className='flex-row items-center px-4 bg-slate-200 rounded-xl text-neutral-900'>
          <Entypo name='lock' color={'grey'} size={22} />
          <TextInput
            style={{ fontSize: hp(2)}}
            placeholder='Enter your password'
            placeholderTextColor={'#433'}
            className='flex-1 px-4'
          />
        </View>
        <Text style={{ fontSize: hp(1.7)}} className='flex-row font-semibold text-right text-indigo-400' >Forgot Password?</Text>
      </View>
      <TouchableOpacity>
        <Text
          style={{ fontSize: hp(2.6), height: hp(5), width: wp(40) }}
          className='bg-blue-500 rounded-2xl text-white text-center items-center pt-1 font-semibold'
        >
          Sign In
        </Text>
      </TouchableOpacity>
      <View className='flex-row justify-center'>
        <Text style={{ fontSize: hp(1.6)}} className='font-semibold text-neutral-900'>Don't have an account?</Text>
        <Pressable onPress={()=> router.push('signUp')}>
          <Text style={{ fontSize: hp(1.6)}} className='font-bold text-indigo-600'> Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
