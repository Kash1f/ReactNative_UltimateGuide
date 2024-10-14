import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StylewithButton = () => {
  return (
    <View>
    <Button title="Basic Button" color={'red'}></Button>
    <TouchableOpacity style={StyleSheet.button}>
        <Text style={StyleSheet.buttonText}></Text>
        </TouchableOpacity>
</View>
)
}

export default StylewithButton

const styles = StyleSheet.create({
    button : {
        margin: 20,
        padding:20
    }
})