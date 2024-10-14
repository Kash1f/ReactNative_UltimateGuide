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

// A function handleClick will be made. handleClick(field, value) will have these two parameters which means that when this function will be called, it will determine that in which field the change is being made and what is the value coming from that field.

// Jab bhi is function ko call karunga to ye 2 values lazmi pass karwani hain, aik field k kis field k andar change ho raha hai, id wali field me ya name me ya email me. Aur doosri cheez ye pass karwani hai k id me change ho raha hai to kya ho raha hai is tarhan email aur name me change ho raha hai to kya ho raha hai