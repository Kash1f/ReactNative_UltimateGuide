import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlatformExample = () => {
  return (
    <View>
      <Text>PlatformExample
        {Platform.OS === 'ios' ? 'Welcome to iOS' : 'Welcome to Android'}
      </Text>
    </View>
  )
}

export default PlatformExample

const styles = StyleSheet.create({})