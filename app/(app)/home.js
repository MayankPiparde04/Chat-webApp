import { Image, Text, View, Pressable, StatusBar, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';
import ChatList from '../../components/ChatList';
import { getDocs, query, where } from 'firebase/firestore';
import { usersRef } from '../../firebaseConfig';

export default function Home() {
  const { logout, user } = useAuth();
  const [users, setUsers] = useState([]);

  // console.log('userdata from home ', user) 

  useEffect(() => {
    if (user?.uid) {
      getUsers();
    }
  }, [user]);

  const getUsers = async () => {
    try {
      const q = query(usersRef, where('userId', '!=', user?.uid));
      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach(doc => {
        data.push({ ...doc.data() });
      });
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  }

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      {users.length > 0 ? (
        <ChatList currentUser={user} users={users} />
      ) : (
        <View className="flex items-center justify-center h-full">
          <ActivityIndicator size={45} color={'#f67'} />
        </View>
      )}
    </View>
  );
}
