import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const MyLoginNativeWind = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View className='flex-1 justify-center items-center bg-gray-900'>
      <Text className='text-4xl font-bold text-white mb-8'>Welcome Back!</Text>
      <TextInput
      placeholder='Enter your email'
      placeholderTextColor={'#ccc'}
      className='w-full h-12 bg-gray-800 rounded-lg text-white px-4 mb-4'
      value={email}
      onChangeText={setEmail}
      keyboardType='email-address'
      />
    </View>
  )
};    

export default MyLoginNativeWind