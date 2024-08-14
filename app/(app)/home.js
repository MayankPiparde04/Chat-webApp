import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Dimensions, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import ChatList from '../../components/ChatList';
import { getDocs, query, where } from 'firebase/firestore';
import { usersRef } from '../../firebaseConfig';
import { Ionicons } from '@expo/vector-icons';
const { width } = Dimensions.get('window');

export default function Home() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from Firestore when user is authenticated
  useEffect(() => {
    if (user?.uid) {
      getUsers();
    }
  }, [user]);

  // Filter users based on search text with debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText.trim()) {
        const filtered = users.filter(user =>
          user.username?.toLowerCase().includes(searchText.toLowerCase().trim())
        );
        setFilteredUsers(filtered);
      } else {
        setFilteredUsers(users);
      }
    }, 50); // Debounce delay for search

    return () => clearTimeout(timer); // Cleanup timeout on unmount or change
  }, [searchText, users]);

  // Function to fetch users from Firestore
  const getUsers = async () => {
    try {
      setLoading(true);
      const q = query(usersRef, where('userId', '!=', user?.uid));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => doc.data());
      setUsers(data);
      setFilteredUsers(data);
    } catch (error) {
      console.error("Error fetching users: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to clear the search text
  const clearSearch = () => {
    setSearchText('');
  };

  return (
    <SafeAreaView>
      <View>
        <View className='flex-row bg-white border border-neutral-500
         h-12 md:h-16 mx-6 rounded-full shadow-md shadow-slate-600
         justify-between items-center pl-6 mt-4'>
          <TextInput
            className='flex-1 text-xl md:text-3xl'
            placeholder="Search"
            value={searchText}
            onChangeText={txt => setSearchText(txt)}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={searchText ? clearSearch : null}>
            <Ionicons
              name={searchText ? "close-circle" : "search"}
              size={width > 500 ? 36 : 28}
              color="black"
              className='pr-3'
            />
          </TouchableOpacity>
        </View>
        {loading ? (
          <View className="flex items-center justify-center h-full">
            <ActivityIndicator size={width > 500 ? 64 : 40} />
          </View>
        ) : (
          filteredUsers.length > 0 ? (
            <ChatList currentUser={user} users={filteredUsers} />
          ) : (
            <View className="flex items-center justify-center h-full">
              <Text className="text-xl md:text-4xl">No users found</Text>
            </View>
          )
        )}
      </View>
    </SafeAreaView>
  );
}
