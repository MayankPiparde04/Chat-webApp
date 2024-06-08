import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react';
import ChatItem from './ChatItem';

export default function ChatList({ users }) {

  console.log(users?.userId);
  return (
    <View clssName='flex-1'>
      <FlatList
        data={users}
        contentContainerStyle={{ paddingVertical: 25 }}
        keyExtractor={item => Math.random()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => <ChatItem item={item} index={index}
        />
        }
        className='h-full rounded-t-lg'
      />
    </View>
  );
}

const styles = StyleSheet.create({});
