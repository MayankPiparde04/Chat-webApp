import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React, { useRef, useState } from 'react';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { useAuth } from '../context/authContext';

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const usernameRef = useRef('');
  const aboutRef = useRef('');
  const contactNoRef = useRef('');
  const profileUrlRef = useRef('');

  const handleSignUp = async () => {
    if (!emailRef.current || !passwordRef.current || !usernameRef.current || !aboutRef.current || !contactNoRef.current || !profileUrlRef.current) {
      Alert.alert('Sign Up', 'Please fill all the fields!');
      return;
    }

    setLoading(true);
    const response = await register(usernameRef.current, emailRef.current, passwordRef.current, aboutRef.current, profileUrlRef.current, contactNoRef.current);
    setLoading(false);

    if (!response.success) {
      Alert.alert('Sign Up', response.msg);
    }
  };

  const handleSignIn = () => {
    router.push('/login');
  };

  return (
    <View className='flex-1 justify-center items-center bg-gray-100'>
      <Text className='text-4xl font-bold mb-6'>Create Account</Text>

      <View className='w-4/5 mb-4'>
        <View className='flex-row items-center bg-white rounded-xl p-3 my-1 shadow'>
          <Entypo name='user' color={'#93f'} size={20} />
          <TextInput
            onChangeText={value => usernameRef.current = value}
            placeholder='Username'
            placeholderTextColor={'#aaa'}
            className='flex-1 ml-2 text-lg'
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
        <View className='flex-row items-center bg-white rounded-xl p-3 my-1 shadow'>
          <Entypo name='mail' color={'#93f'} size={20} />
          <TextInput
            onChangeText={value => emailRef.current = value}
            placeholder='Email'
            placeholderTextColor={'#aaa'}
            className='flex-1 ml-2 text-lg'
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
        <View className='flex-row items-center bg-white rounded-xl p-3 my-1 shadow'>
          <Entypo name='lock' color={'#93f'} size={20} />
          <TextInput
            onChangeText={value => passwordRef.current = value}
            placeholder='Password'
            placeholderTextColor={'#aaa'}
            secureTextEntry
            className='flex-1 ml-2 text-lg'
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
        <View className='flex-row items-center bg-white rounded-xl p-3 my-1 shadow'>
          <MaterialCommunityIcons name="account-details-outline" size={24} color="#93f" />
          <TextInput
            onChangeText={value => aboutRef.current = value}
            placeholder='About'
            placeholderTextColor={'#aaa'}
            className='flex-1 ml-2 text-lg'
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
        <View className='flex-row items-center bg-white rounded-xl p-3 my-1 shadow'>
          <Entypo name='image' color={'#93f'} size={20} />
          <TextInput
            onChangeText={value => profileUrlRef.current = value}
            placeholder='Profile URL'
            placeholderTextColor={'#aaa'}
            className='flex-1 ml-2 text-lg'
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
        <View className='flex-row items-center bg-white rounded-xl p-3 my-1 shadow'>
          <Entypo name='lock' color={'#93f'} size={20} />
          <TextInput
            onChangeText={value => contactNoRef.current = value}
            placeholder='Contact Number'
            placeholderTextColor={'#aaa'}
            className='flex-1 ml-2 text-lg'
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={handleSignUp}
        // style={{ height: hp(6) }}
        disabled={loading}
      >
        {loading ? <ActivityIndicator size={38} color={'#33F'} /> : <Text
          style={{ fontSize: hp(2.8), height: hp(5), width: wp(35) }}
          className='bg-blue-500 rounded-full  text-white text-center items-center pt-1 font-semibold'
        >
          Sign Up
        </Text>}
      </TouchableOpacity>
      <View className='flex-row justify-center mt-4'>
        <Text className='text-gray-700'>Already have an account?</Text>
        <TouchableOpacity onPress={handleSignIn}>
          <Text className='text-blue-500 font-bold ml-2'>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
