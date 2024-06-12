// chat item

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useContext, useEffect, useState } from 'react';
import { formatDate, getRoomId } from '../utils/common';
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebaseConfig';



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
            // console.log('Last message time:', formattedTime);
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
    }

    return (
        <TouchableOpacity onPress={openChatRoom}>
            {/* <Text>{currentUser?.username}</Text> */}
            <View className={`flex-row mx-3 items-cente justify-between gap-3 mb-2 pb-2 ${noBorder ? '' : 'border-b border-b-black'}`}>
                <View>
                    <Image
                        source={{ uri: item?.profileUrl }}
                        style={{ height: hp(6), width: hp(6) }}
                        className='rounded-full' />
                </View>
                <View className='flex-1 gap-1 text-sm'>
                    <View className='flex-row justify-between'>
                        <Text className='text-neutral-900 text-lg font-semibold'>{item?.username}</Text>
                        <Text className='text-neutral-700 font-semibold'>{renderTime()}</Text>
                    </View>
                    <View className='flex-row justify-between h-7 items-center'>
                        <Text className='text-neutral-700 '>{renderLastMessage()}</Text>
                        <Text className='text-slate-600 text-sm '>{renderDate()}</Text>
                    </View>
                </View>
            </View >
        </TouchableOpacity>

    )
}