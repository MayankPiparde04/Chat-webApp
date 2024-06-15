import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React, { useRef, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useAuth } from '../context/authContext';

const Login = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleLogIn = async () => {
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert('Log In', 'Please fill all the fields!');
            return;
        }

        setLoading(true);
        const response = await login(emailRef.current, passwordRef.current);
        setLoading(false);

        console.log('From login : ', response);

        if (!response.success) {
            Alert.alert('Log In', response.msg);
        }
    };

    const handleSignUp = () => {
        router.push('/registerPage');
    };

    return (
        <View className="flex-1 justify-center items-center bg-gray-100">
            <Text className="text-4xl font-bold mb-8">Welcome Back</Text>

            <View className="w-4/5 mb-4">
                <View className="flex-row items-center bg-white rounded-xl p-3 mb-4 shadow">
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
                <View className="flex-row items-center bg-white rounded-xl p-3 shadow">
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
                <Text className="text-right text-blue-500 mt-2">Forgot Password?</Text>
            </View>

            <TouchableOpacity
                onPress={handleLogIn}
                className="rounded-full p-3 mb-6"
                disabled={loading}
            >
                {loading ? <ActivityIndicator size="small" color={'#33f'} /> :

                    <Text
                        style={{ fontSize: hp(2.6), height: hp(5), width: wp(30) }}
                        className='bg-blue-500 rounded-2xl text-white text-center items-center pt-1 font-semibold'
                    >Log In</Text>
                }
            </TouchableOpacity>

            <View className="flex-row pt-2 justify-center">
                <Text className="text-gray-700">Don't have an account?</Text>
                <TouchableOpacity onPress={handleSignUp}>
                    <Text className="text-blue-500 font-bold ml-2">Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
