import React, { useEffect, useRef, useState } from 'react';
import {
  StatusBar, TextInput, Dimensions, TouchableOpacity, View, Keyboard, Alert
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Timestamp, addDoc, collection, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useAuth } from '../../context/authContext';
import { getRoomId } from '../../utils/common';
import ChatRoomHeader from '../../components/ChatRoomHeader';
import MessageList from '../../components/MessageList';

const { width, height } = Dimensions.get('window');


const ChatRooms = () => {
  const { user } = useAuth();
  const router = useRouter();
  const item = useLocalSearchParams();

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const textRef = useRef('');
  const inputRef = useRef(null);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    createRoomIfNotExists();
    let roomId = getRoomId(user?.userId, item?.userId);
    const docRef = doc(db, 'rooms', roomId);
    const messagesRef = collection(docRef, "messages");
    const q = query(messagesRef, orderBy('createdAt', 'asc'));
    let unsub = onSnapshot(q, (snapshot) => {
      let allMessages = snapshot.docs.map(doc => doc.data());
      setMessages(allMessages);
    });

    const KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', updateScrollView);

    return () => {
      unsub();
      KeyboardDidShowListener.remove();
    };
  }, []);

  const updateScrollView = () => {
    setTimeout(() => {
      scrollViewRef?.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  useEffect(() => {
    updateScrollView();
  }, [message]);

  const createRoomIfNotExists = async () => {
    let roomId = getRoomId(user?.userId, item?.userId);
    await setDoc(doc(db, "rooms", roomId), {
      roomId,
      createdAt: Timestamp.fromDate(new Date())
    });
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
    } catch (err) {
      Alert.alert('Message', err.message);
    }
  };
  // console.log('from chat room : ', item?.about)
  return (
    <View className='flex-1 bg-teal-100'>
      <StatusBar style='dark' />
      <ChatRoomHeader user={item} router={router} />
      <View className='flex-1 justify-between overflow-visible'>
        <View className='flex-1'>
          <MessageList scrollViewRef={scrollViewRef} messages={messages} currentUser={user} />
        </View>
        <View className=' flex-row items-center px-3 h-24 md:h-28 justify-center'>
          <View className='flex-row justify-between items-center h-14 md:h-20 w-full 
          bg-white border p-2 rounded-3xl
          border-neutral-300'>
            <TextInput
              ref={inputRef}
              onChangeText={value => { textRef.current = value }}
              placeholder='Type message...'
              className="flex-1 text-xl md:text-3xl pl-2 mr-2 h-12 md:h-14 rounded-l-xl"
            />
            <TouchableOpacity onPress={handleSendMessage}>
              <MaterialIcons name="send" color="blue" size={width > 500 ? 38 : 28} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatRooms;
