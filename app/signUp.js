import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, Alert, ActivityIndicator } from 'react-native';
import React, { useRef, useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Entypo, Feather } from '@expo/vector-icons'
import { router, useRouter } from 'expo-router';
import { auth } from '../firebaseConfig';
import { useAuth } from '../context/authContext';



const SignUp = () => {
  const router = useRouter();
  const {register} = useAuth();

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const usernameRef = useRef('');
  const [loading, setLoading] = useState(false);


  const handleLogIn = async () => {
    if (!emailRef.current || !passwordRef.current || !usernameRef.current) {
      Alert.alert('Sign Up', 'Please fill all the fields!');
      return;
    }
    
    // register 
    setLoading(true);

    let responce = await register(emailRef.current, passwordRef.current, usernameRef.current)

    setLoading(false);

    console.log('got result : ', responce);
    if (!responce.success) {
      Alert.alert('Sign Up' , responce.msg);  
    }

  };

  return (
    <View className='flex-1 justify-center items-center bg-slate-50 gap-6'>
      <Text className='text-3xl font-bold'>Sign Up</Text>
      <View style={{ height: hp(6), width: wp(90) }} className='flex-row items-center px-4 bg-slate-200 rounded-xl text-neutral-900'>
        <Feather name='user' color={'grey'} size={22} />
        <TextInput
          onChangeText={value => usernameRef.current = value}
          style={{ fontSize: hp(2) }}
          placeholder='Username'
          placeholderTextColor={'#433'}
          className='flex-1 px-4'
        />
      </View>
      <View style={{ height: hp(6), width: wp(90) }} className='flex-row items-center px-4 bg-slate-200 rounded-xl text-neutral-900'>
        <Entypo name='mail' color={'grey'} size={22} />
        <TextInput
          onChangeText={value => emailRef.current = value}
          style={{ fontSize: hp(2) }}
          placeholder='Email address'
          placeholderTextColor={'#433'}
          className='flex-1 px-4'
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
          />
        </View>
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
          Sign Up
        </Text>}

      </TouchableOpacity>
      <View className='flex-row justify-center'>
        <Text style={{ fontSize: hp(1.6) }} className='font-semibold text-neutral-900'>Already have an account?</Text>
        <Pressable onPress={() => router.push('signIn')}>
          <Text style={{ fontSize: hp(1.6) }} className='font-bold text-indigo-600'> Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
