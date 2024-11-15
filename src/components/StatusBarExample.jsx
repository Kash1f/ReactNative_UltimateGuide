import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StatusBarExample = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barsStyle={"light-content"}
        hidden={false}
        backgroundColor="#6200fe"
      />
      <Text style={styles.text}>Status Bar</Text>
    </View>
  )
}

export default StatusBarExample

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200fe',
  },
  text: {
    fontSize: 30,
    color: 'white'
  }
})