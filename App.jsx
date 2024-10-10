import { View, Text } from 'react-native'
import React from 'react'
import GET_API from './src/components/GET_API'
import AnimatedCardFlip from './src/components/AnimatedCardFlip'
import AsyncStorageExample from './src/components/AsyncStorageExample'
import POST_API from './src/components/POST_API'
import LoginForm from './src/components/LoginForm'

const App = () => {
  return (
    <View>
      {/* <LoginForm/> */}
      {/* <GET_API/> */}
      <POST_API/>
      {/* <AnimatedCardFlip/> */}
      {/* <AsyncStorageExample/> */}
     
    </View>
  )
}

export default App