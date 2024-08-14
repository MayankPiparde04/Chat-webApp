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
      <Text className='text-3xl md:text-5xl font-semibold mb-6'>Create Account</Text>

      <View className='w-4/5 mb-6 gap-3'>
        <View className="flex-row items-center bg-white shadow shadow-slate-600 rounded-xl p-3 ">
          <Entypo name='user' color={'#77a'} size={24} />
          <TextInput
            onChangeText={value => usernameRef.current = value}
            placeholder='Username'
            placeholderTextColor={'#aaa'}
            className='flex-1 pl-2 md:h-16 text-lg md:text-4xl'
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
        <View className="flex-row items-center bg-white shadow shadow-slate-600 rounded-xl p-3 ">
          <Entypo name='mail' color={'#77a'} size={24} />
          <TextInput
            onChangeText={value => emailRef.current = value}
            placeholder='Email'
            placeholderTextColor={'#aaa'}
            className='flex-1 pl-2 md:h-16 text-lg md:text-4xl'
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
        <View className="flex-row items-center bg-white shadow shadow-slate-600 rounded-xl p-3 ">
          <Entypo name='lock' color={'#77a'} size={24} />
          <TextInput
            onChangeText={value => passwordRef.current = value}
            placeholder='Password'
            placeholderTextColor={'#aaa'}
            secureTextEntry
            className='flex-1 pl-2 md:h-16 text-lg md:text-4xl'
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
        <View className="flex-row items-center bg-white shadow shadow-slate-600 rounded-xl p-3 ">
          <MaterialCommunityIcons name="account-details-outline" size={24} color="#77a" />
          <TextInput
            onChangeText={value => aboutRef.current = value}
            placeholder='About'
            placeholderTextColor={'#aaa'}
            className='flex-1 pl-2 md:h-16 text-lg md:text-4xl'
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
        <View className="flex-row items-center bg-white shadow shadow-slate-600 rounded-xl p-3 ">
          <Entypo name='image' color={'#77a'} size={24} />
          <TextInput
            onChangeText={value => profileUrlRef.current = value}
            placeholder='Profile URL'
            placeholderTextColor={'#aaa'}
            className='flex-1 pl-2 md:h-16 text-lg md:text-4xl'
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
        <View className="flex-row items-center bg-white shadow shadow-slate-600 rounded-xl p-3 ">
          <Entypo name='lock' color={'#77a'} size={24} />
          <TextInput
            onChangeText={value => contactNoRef.current = value}
            placeholder='Contact Number'
            placeholderTextColor={'#aaa'}
            className='flex-1 pl-2 md:h-16 text-lg md:text-4xl'
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={handleSignUp}
        className="rounded-full p-3 mb-6"
        disabled={loading}
      >
        {loading ? <ActivityIndicator size="medium" color={'#33f'} /> :

          <Text
            className='flex bg-blue-500 shadow shadow-slate-600
                rounded-full h-12 md:h-20 w-36 md:w-48 text-xl md:text-4xl 
                text-white pt-2 md:pt-5 text-center font-semibold'
          >Sign Up</Text>
        }
      </TouchableOpacity>
      <View className='flex-row justify-center mt-4'>
        <Text className="text-gray-700 text-lg md:text-3xl">Already have an account?</Text>
        <TouchableOpacity onPress={handleSignIn}>
          <Text className="text-blue-500 font-semibold ml-2 text-lg md:text-3xl">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
