import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Entypo, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/authContext';

// SignUp component for user registration
const SignUp = () => {
  const router = useRouter();
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password || !username) {
      Alert.alert('Sign Up', 'Please fill all the fields!');
      return;
    }

    setLoading(true);
    let response = await register(username, email, password);
    setLoading(false);

    if (!response.success) {
      Alert.alert('Sign Up', response.msg);
    } else {
      navigateToSignIn(); // Navigate to sign-in page upon successful sign-up
    }
  };

  const navigateToSignIn = () => {
    router.push('signIn').catch(err => {
      console.error('Navigation Error:', err.message);
      Alert.alert('Navigation Error', 'Failed to navigate to sign-in page');
    });
  };

  return (
    // Main container
    <View className='flex-1 justify-center items-center bg-slate-50 gap-6'>
      <Text className='text-3xl font-bold'>Sign Up</Text>
      {/* Username input */}
      <View style={{ height: hp(6), width: wp(90) }} className='flex-row items-center px-4 bg-slate-200 rounded-xl text-neutral-900'>
        <Feather name='user' color={'grey'} size={22} />
        <TextInput
          onChangeText={setUsername}
          style={{ fontSize: hp(2) }}
          placeholder='Username'
          placeholderTextColor={'#433'}
          className='flex-1 px-4'
        />
      </View>
      {/* Email input */}
      <View style={{ height: hp(6), width: wp(90) }} className='flex-row items-center px-4 bg-slate-200 rounded-xl text-neutral-900'>
        <Entypo name='mail' color={'grey'} size={22} />
        <TextInput
          onChangeText={setEmail}
          style={{ fontSize: hp(2) }}
          placeholder='Email address'
          placeholderTextColor={'#433'}
          className='flex-1 px-4'
        />
      </View>
      {/* Password input */}
      <View className='gap-3'>
        <View style={{ height: hp(6), width: wp(90) }} className='flex-row items-center px-4 bg-slate-200 rounded-xl text-neutral-900'>
          <Entypo name='lock' color={'grey'} size={22} />
          <TextInput
            onChangeText={setPassword}
            secureTextEntry
            style={{ fontSize: hp(2) }}
            placeholder='Password'
            placeholderTextColor={'#433'}
            className='flex-1 px-4'
          />
        </View>
      </View>
      {/* Sign-Up button */}
      <TouchableOpacity
        onPress={handleSignUp}
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
      {/* Sign-In link */}
      <View className='flex-row justify-center'>
        <Text style={{ fontSize: hp(1.6) }} className='font-semibold text-neutral-900'>Already have an account? </Text>
        <Pressable onPress={() => router.push('signIn')}>
          <Text style={{ fontSize: hp(1.6) }} className='font-bold text-indigo-600'>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
