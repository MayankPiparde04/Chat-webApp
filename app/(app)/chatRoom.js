import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useLocalSearchParams, useRouter } from 'expo-router';
import ChatRoomHeader from '../../components/ChatRoomHeader';
import MessageList from '../../components/MessageList';
import { MaterialIcons } from '@expo/vector-icons';

const ChatRooms = () => {
  const item = useLocalSearchParams();
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
      // Keyboard.dismiss();
    }
  };

  return (
    <View className='flex-1 bg-white'>
      <StatusBar style='dark' />
      <ChatRoomHeader user={item} router={router} />
      <View className='h-2 border-b border-neutral-300' />
      <View className='flex-1 justify-between overflow-visible bg-neutral-200'>
        <View className='flex-1'>
          <MessageList messages={messages} />
        </View>
        <View style={{ marginTop: hp(1.6) }} className='pt-2 px-2'>
          <View className='flex-row justify-between items-center mb-2 w-full bg-white border p-2 rounded-3xl border-neutral-300'>
            <TextInput
              placeholder='Type message...'
              style={{ fontSize: hp(1.6), flex: 1 }}
              value={message}
              onChangeText={setMessage}
              onSubmitEditing={sendMessage}
            />
            <TouchableOpacity onPress={sendMessage}>
              <MaterialIcons name="send" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatRooms;

const styles = StyleSheet.create({});
