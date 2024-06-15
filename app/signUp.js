import { View, Text, TextInput, TouchableOpacity, Pressable, Alert, ActivityIndicator } from 'react-native';
import React, { useRef, useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Entypo, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/authContext';

const SignUp = () => {
  // const router = useRouter();
  // const { register } = useAuth();
  // const [loading, setLoading] = useState(false);

  // const emailRef = useRef('');
  // const passwordRef = useRef('');
  // const usernameRef = useRef('');
  // const profileRef = useRef('');
  console.log('hii from signup')

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [username, setUsername] = useState('');
  // const [profileUrl, setProfileUrl] = useState('');
  
  // const handleRegister = async () => {
  //   if (!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current) {
  //     Alert.alert('Sign Up', 'Please fill all the fields!');
  //     return;
  //   }

  //   setLoading(true);
  //   let response = await register(emailRef.current, passwordRef.current, usernameRef.current, profileRef.current);
  //   setLoading(false);

  //   console.log('from sign up : ',  response)
  //   if (!response.success) {
  //     Alert.alert('Sign Up', response.msg);
  //   }
  // };
  
  return (
    <View className='flex-1 justify-center items-center bg-slate-50 gap-6'>
      {/* <Text className='text-3xl font-bold'>Sign Up</Text>
      <View style={{ height: hp(6), width: wp(90) }} className='flex-row items-center px-4 bg-slate-200 rounded-xl text-neutral-900'>
        <Feather name='user' color={'grey'} size={22} />
        <TextInput
          onChangeText={usernameRef}
          style={{ fontSize: hp(2) }}
          placeholder='Username'
          placeholderTextColor={'#433'}
          className='flex-1 px-4'
        />
      </View>
      <View style={{ height: hp(6), width: wp(90) }} className='flex-row items-center px-4 bg-slate-200 rounded-xl text-neutral-900'>
        <Entypo name='mail' color={'grey'} size={22} />
        <TextInput
          onChangeText={emailRef}
          style={{ fontSize: hp(2) }}
          placeholder='Email address'
          placeholderTextColor={'#433'}
          className='flex-1 px-4'
          autoCorrect={false}
          autoCapitalize='none'
        />
      </View> */}
      {/* <View className='gap-3'>
        <View style={{ height: hp(6), width: wp(90) }} className='flex-row items-center px-4 bg-slate-200 rounded-xl text-neutral-900'>
          <Entypo name='lock' color={'grey'} size={22} />
          <TextInput
            onChangeText={passwordRef}
            secureTextEntry
            style={{ fontSize: hp(2) }}
            placeholder='Password'
            placeholderTextColor={'#433'}
            className='flex-1 px-4'
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
      </View>
      <View className='gap-3'>
        <View style={{ height: hp(6), width: wp(90) }} className='flex-row items-center px-4 bg-slate-200 rounded-xl text-neutral-900'>
          <Entypo name='link' color={'grey'} size={22} />
          <TextInput
            onChangeText={profileRef}
            style={{ fontSize: hp(2) }}
            placeholder='Profile URL'
            placeholderTextColor={'#433'}
            className='flex-1 px-4'
          />
        </View>
      </View> */}
      {/* <TouchableOpacity
        // onPress={handleRegister}
        style={{ height: hp(6) }}
        disabled={loading}
      >
        {loading ? <ActivityIndicator size={38} color={'#33F'} /> : <Text
          style={{ fontSize: hp(2.6), height: hp(5), width: wp(40) }}
          className='bg-blue-500 rounded-2xl text-white text-center items-center pt-1 font-semibold'
        >
          Sign Up
        </Text>}
      </TouchableOpacity>
      <View className='flex-row justify-center'>
        <Text style={{ fontSize: hp(1.6) }} className='font-semibold text-neutral-900'>Already have an account?</Text>
        <Pressable onPress={() => { console.log("Navigating to SignIn"); router.push('/signIn'); }}>
          <Text style={{ fontSize: hp(1.6) }} className='font-bold text-indigo-600'> Sign In</Text>
        </Pressable>
      </View> */}
    </View>
  );
};

export default SignUp;
