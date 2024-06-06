import { Text, View, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useAuth } from '../../context/authContext';

export default function Home() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogOut = async () => {
    await logout();
    router.push('signIn'); // Redirect to sign-in screen after logout
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={handleLogOut}>
        <Text style={{ fontSize: hp(1.6), fontWeight: 'bold', color: 'indigo' }}>Log out</Text>
      </Pressable>
    </View>
  );
}
