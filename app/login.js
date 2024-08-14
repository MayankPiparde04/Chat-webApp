import { View, Text, TextInput, TouchableOpacity, Alert, Dimensions, ActivityIndicator } from 'react-native';
import React, { useRef, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useAuth } from '../context/authContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
            {/* style={{ width: windowWidth("70%") }} */}
            <Text className="text-3xl md:text-5xl font-semibold mb-6">Welcome Back</Text>

            <View className="w-4/5 mb-4 gap-5">
                <View className="flex-row items-center bg-white shadow shadow-slate-600 rounded-xl p-3 ">
                    <Entypo name='mail' color='#77a' size={24}
                        className='pr-2'
                    />
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
                    <Entypo name='lock' color={'#77a'} size={24}
                        className="pr-2" />

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
                <Text className="text-right text-sm md:text-2xl text-blue-500 mt-2">Forgot Password?</Text>
            </View>

            <TouchableOpacity
                onPress={handleLogIn}
                className="rounded-full p-3 mb-6"
                disabled={loading}
            >
                {loading ? <ActivityIndicator size="medium" color={'#33f'} /> :

                    <Text
                        className='flex bg-blue-500 shadow shadow-slate-600
                        rounded-full h-12 md:h-20 w-36 md:w-48 text-xl md:text-4xl 
                        text-white pt-2 md:pt-5 text-center font-semibold'
                    >Log In</Text>
                }
            </TouchableOpacity>

            <View className="flex-row pt-4 justify-center">
                <Text className="text-gray-700 text-lg md:text-3xl">Don't have an account?</Text>
                <TouchableOpacity onPress={handleSignUp}>
                    <Text className="text-blue-500 font-semibold ml-2 text-lg md:text-3xl">Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
