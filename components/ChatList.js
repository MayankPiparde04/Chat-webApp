// chat list
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useState } from 'react';
import ChatItem from './ChatItem';
import { useRouter } from 'expo-router';

export default function ChatList({ users, currentUser }) {
  const router = useRouter();

  // console.log('From chat list :', users);

  return (
    <View clssName='flex-1'>
      <FlatList
        data={users}
        contentContainerStyle={{ paddingVertical: 15 }}
        keyExtractor={item => Math.random()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) =>
          <ChatItem item={item}
            noBorder={index + 1 == users.length}
            router={router}
            currentUser={currentUser}
            index={index} />}
        className='h-full'
      />
    </View>
  );
}

const styles = StyleSheet.create({});
