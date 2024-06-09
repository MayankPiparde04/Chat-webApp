import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MessageItems from './MessageItems'

export default function MessageList({ messages, scrollViewRef, currentUser }) {
  return (
    <ScrollView ref={scrollViewRef} showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding: 10 }}>
      {
        messages.map((message, index) => {
          return (
            <MessageItems message={message} key={index} currentUser={currentUser} />
          )
        })
      }

    </ScrollView>
  )
}

const styles = StyleSheet.create({})