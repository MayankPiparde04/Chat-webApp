import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React, { useRef, useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/authContext';

const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleLogIn = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert('Sign In', 'Please fill all the fields!');
      return;
    }

    setLoading(true);
    const response = await login(emailRef.current, passwordRef.current);
    setLoading(false);

    console.log('From login : ', response);

    if (!response.success) {
      Alert.alert('Sign In', response.msg);
    }
  };

  const handleSignUp = () => {
    router.push('/registerPage');
  };

  return (
    <View className='flex-1 justify-center items-center bg-slate-50 gap-6'>
      <Text className='text-3xl font-bold'>Sign In</Text>
      <View style={{ height: hp(6), width: wp(90) }} className='flex-row items-center px-4 bg-slate-200 rounded-xl text-neutral-900'>
        <Entypo name='mail' color={'grey'} size={22} />
        <TextInput
          onChangeText={value => emailRef.current = value}
          style={{ fontSize: hp(2) }}
          placeholder='Email address'
          placeholderTextColor={'#433'}
          className='flex-1 px-4'
          autoCorrect={false}
          autoCapitalize='none'
        />
      </View>
      <View className='gap-3'>
        <View style={{ height: hp(6), width: wp(90) }} className='flex-row items-center px-4 bg-slate-200 rounded-xl text-neutral-900'>
          <Entypo name='lock' color={'grey'} size={22} />
          <TextInput
            onChangeText={value => passwordRef.current = value}
            secureTextEntry
            style={{ fontSize: hp(2) }}
            placeholder='Password'
            placeholderTextColor={'#433'}
            className='flex-1 px-4'
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
        <Text style={{ fontSize: hp(1.7) }} className='flex-row font-semibold text-right text-indigo-400'>Forgot Password?</Text>
      </View>
      <TouchableOpacity
        onPress={handleLogIn}
        style={{ height: hp(6) }}
        disabled={loading}
      >
        {loading ? <ActivityIndicator size={38} color={'#33F'} /> : <Text
          style={{ fontSize: hp(2.6), height: hp(5), width: wp(40) }}
          className='bg-blue-500 rounded-2xl text-white text-center items-center pt-1 font-semibold'
        >
          Sign In
        </Text>}
      </TouchableOpacity>
      <View className='flex-row justify-center'>
        <Text style={{ fontSize: hp(1.6) }} className='font-semibold text-neutral-900'>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <View>
            <Text style={{ fontSize: hp(1.6) }} className='font-bold text-indigo-600'> Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
