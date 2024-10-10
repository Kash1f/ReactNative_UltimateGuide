import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const DELETE_API = () => {

    const [id, setId] = useState();
    const handleDelete = async () => {
        try{
            const response = await axios.delete('');
        } catch (error){
            console.log(error);
            
        }
    }



  return (
    <View>
      <Text>DELETE_API</Text>
    </View>
  )
}

export default DELETE_API

const styles = StyleSheet.create({})