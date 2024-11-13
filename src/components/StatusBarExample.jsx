import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StatusBarExample = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barsStyle="light-content"
        hidden={false}
      />
      <Text style={styles.text}>StatusBarExample</Text>
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
  }
})