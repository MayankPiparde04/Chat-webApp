import { Image, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useEffect, useState } from 'react';
import { formatDate, getRoomId } from '../utils/common';
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { Ionicons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');


export default function ChatItem({ item, router, noBorder, currentUser }) {
  const [lastMessage, setLastMessage] = useState(null);


  useEffect(() => {
    if (!currentUser || !item) return;

    const roomId = getRoomId(currentUser.userId, item.userId);

    const docRef = doc(db, 'rooms', roomId);
    const messagesRef = collection(docRef, 'messages');
    const q = query(messagesRef, orderBy('createdAt', 'desc'));

    const unsub = onSnapshot(q, (snapshot) => {
      const allMessages = snapshot.docs.map((doc) => doc.data());
      setLastMessage(allMessages.length > 0 ? allMessages[0] : null);
    });

    return () => unsub();
  }, [currentUser, item]);

  // Time
  const renderTime = () => {
    if (lastMessage) {
      let date = lastMessage?.createdAt;
      return formatDate(new Date(date?.seconds * 1000));
    }
    return 'Time';
  };

  // Date
  const renderDate = () => {
    if (lastMessage) {
      const messageTime = new Date(lastMessage.createdAt?.seconds * 1000);
      const formattedTime = messageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return formattedTime;
    }
    return 'Date';
  };

  const renderLastMessage = () => {
    if (lastMessage) {
      const messageText = currentUser?.userId === lastMessage.userId ? `You: ${lastMessage.text}` : lastMessage.text;
      return messageText;
    }
    return 'Say hi 👋';
  };

  const openChatRoom = () => {
    router.push({ pathname: '/chatRoom', params: item });
  };

  const imageSize = {
    width: width > 500 ? 80 : 54,
    height: height > 900 ? 80 : 54,
  };


  return (

    <View>
      <TouchableOpacity onPress={openChatRoom}>
        <View className={`flex-row mx-4 md:mx-6 items-center justify-between gap-4 mb-2 pb-2 md:h-28
          ${noBorder ? '' : 'border-b border-b-black'}`}>
          <View>
            <Image
              source={{ uri: item?.profileUrl }}
              className='rounded-full border border-black'
              // style={width > 500 ? 20 : 28, height > 500 ? 28 : 28}
              style={imageSize}
            />
          </View>
          <View className='flex-1 gap-1 '>
            <View className='flex-row justify-between'>
              <Text className='text-neutral-900 text-xl md:text-3xl'>{item?.username}</Text>
              <Text className='text-neutral-700 text-md md:text-xl'>{renderTime()}</Text>
            </View>
            <View className='flex-row justify-between h-7 items-center'>
              <Text className='text-neutral-700 text-md md:text-xl'>{renderLastMessage()}</Text>
              <Text className='text-slate-600 text-sm md:text-lg'>{renderDate()}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
