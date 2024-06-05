import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class home extends Component {
  render() {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text className='text-5xl text-red-500 '>Home</Text>
      </View>
    )
  }
}