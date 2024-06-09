import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ChatRooms = () => {
  const item = useLocalSearchParams();
  console.log('got data from chat room', item);
  return (
    <View>
      <Text>{item.username}</Text>
    </View>
  )
}

export default ChatRooms

const styles = StyleSheet.create({})