import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PUT_API = () => {

    const [formData, setFormData] = useState({id: '', name:'', email:''})

    const handleInputChange = (field, value) => {
        setFormData({...formData, [field]: value})
    }
}
    const handleUpdate = () => {

  return (
    <View>
      <Text>PUT_API</Text>
    </View>
  )
}

export default PUT_API

const styles = StyleSheet.create({})