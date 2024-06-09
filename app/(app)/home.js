import { Image, Text, View, Pressable, StatusBar, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';
import ChatList from '../../components/ChatList';
import { getDocs, query, where } from 'firebase/firestore';
import { usersRef } from '../../firebaseConfig';


export default function Home() {
  const { logout, user } = useAuth();
  const [users, setUsers] = useState('null');

  // console.log('userdata from home ', user) 

  useEffect(() => {
    if (user?.uid) {
      getUsers();
    };
  }, [])
  const getUsers = async () => {
    const q = query(usersRef, where('userId', '!=', user?.uid));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach(doc => {
      data.push({ ...doc.data() });
    });
    setUsers(data);
    // console.log('Got user from fetched data', data);

  }
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      {users.length > 0 ? (
        <ChatList users={users} />
      ) : (
        <View className="flex items-center justify-center h-full">
          <ActivityIndicator size={45} color={'#f67'} />
        </View>
      )}

      <Text>
        Home Screen
      </Text>
    </View>
  );
}
