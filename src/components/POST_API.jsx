import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const POST_API = () => {
  return (
    <View>
      <Text style={styles.textStyle}>POST API Method</Text>
      <TextInput
        placeholder="Enter ID"
      />
       <TextInput
        placeholder="Enter Name"
      />
       <TextInput
        placeholder="Enter Email"
      />
      <Button
      title="Submit"
      />
    </View>
  )
}

export default POST_API

const styles = StyleSheet.create({
    textStyle : {
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 10
    }
})