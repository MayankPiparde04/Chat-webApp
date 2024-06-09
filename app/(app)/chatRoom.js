import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, Alert, Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useLocalSearchParams, useRouter } from 'expo-router';
import ChatRoomHeader from '../../components/ChatRoomHeader';
import MessageList from '../../components/MessageList';
import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '../../context/authContext';
import { getRoomId } from '../../utils/common';
import { Timestamp, addDoc, collection, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const ChatRooms = () => {
  const { user } = useAuth(); // logged user
  const item = useLocalSearchParams(); // Second User

  const router = useRouter('');

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const textRef = useRef('');
  const inputRef = useRef(null);
  const scrollViewRef = useRef(null);


  //user message data
  useEffect(() => {
    createRoomIfNotExists();
    let roomId = getRoomId(user?.userId, item?.userId);
    const docRef = doc(db, 'rooms', roomId);
    const messagesRef = collection(docRef, "messages");
    const q = query(messagesRef, orderBy('createdAt', 'asc'))
    let unsub = onSnapshot(q, (snapshot) => {
      let allMessages = snapshot.docs.map(doc => doc.data());
      setMessages(allMessages);
    });

    const KeyboardDidShowListener=Keyboard.addListener(
      'keyboardDidShow',updateScrollView
    )

    return () => {
      unsub();
      KeyboardDidShowListener.remove();
    };
  }, []);
  const updateScrollView = () => {
    setTimeout(() => {
      scrollViewRef?.current?.scrollToEnd({ animated: true })
    }, 100)
  }

  useEffect(() => {
    updateScrollView();
  }, [message]);

  const createRoomIfNotExists = async () => {
    let roomId = getRoomId(user?.userId, item?.userId);
    await setDoc(doc(db, "rooms", roomId), {
      roomId,
      createdAt: Timestamp.fromDate(new Date())
    });

    // console.log('Rooms Id : ', roomId);
  };

  const handleSendMessage = async () => {
    let message = textRef.current.trim();
    if (!message) return;

    try {
      let roomId = getRoomId(user?.userId, item?.userId);
      const docRef = doc(db, 'rooms', roomId);
      const messagesRef = collection(docRef, "messages");
      textRef.current = "";
      if (inputRef) inputRef?.current?.clear();
      const newDoc = await addDoc(messagesRef, {
        userId: user?.userId,
        text: message,
        profileUrl: user?.profileUrl,
        senderName: user?.username,
        createdAt: Timestamp.fromDate(new Date())
      });

      // console.log('New message: ', newDoc.id);
    } catch (err) {
      Alert.alert('Message', err.message);
      // console.log(err.message)
    }
  }
  // console.log('Messages Data: ', messages)
  return (
    <View className='flex-1 bg-white'>
      <StatusBar style='dark' />
      <ChatRoomHeader user={item} router={router} />
      <View className='h-2 border-b border-neutral-300' />
      <View className='flex-1 justify-between overflow-visible bg-neutral-200'>
        <View className='flex-1'>
          <MessageList scrollViewRef={scrollViewRef} messages={messages} currentUser={user} />
        </View>
        <View style={{ marginTop: hp(1.6) }} className='pt-2 px-2'>
          <View className='flex-row justify-between items-center mb-2 w-full bg-white border p-2 rounded-3xl border-neutral-300'>
            <TextInput
              ref={inputRef}
              onChangeText={value => { textRef.current = value }}
              placeholder='Type message...'
              style={{ fontSize: hp(1.9), flex: 1 }}
            // onChangeText={setMessage}
            // onSubmitEditing={handleSendMessage}
            />
            <TouchableOpacity onPress={handleSendMessage}>
              <MaterialIcons name="send" color="blue" size={24} />
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatRooms;

const styles = StyleSheet.create({});
