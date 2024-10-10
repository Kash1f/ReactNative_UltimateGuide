import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const POST_API = () => {

    const [formData, setFormData] = useState({id: '', name:'', email:''})

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

//Notes for POST API topic:

// The data of Input fields will be stored in state object, when the data will be stored, we will use axios POST method to send data to the API

// The state variable i.e formData, will be made an object with id, name and email that will be empty initally. We have made properties that there will be id, name and email but for now they will be empty