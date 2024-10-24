import { View } from 'react-native'
import React from 'react'
import GET_API from './src/components/GET_API'
import AnimatedCardFlip from './src/components/AnimatedCardFlip'
import AsyncStorageExample from './src/components/AsyncStorageExample'
import POST_API from './src/components/POST_API'
import LoginForm from './src/components/LoginForm'
import DELETE_API from './src/components/DELETE_API'
import FlatListScreen from './src/components/FlatListScreen'

const App = () => {
  return (
    <View>
      {/* <LoginForm/> */}
      {/* <GET_API/> */}
      {/* <POST_API/> */}
      {/* <DELETE_API/> */}
      {/* <AnimatedCardFlip/> */}
      {/* <AsyncStorageExample/> */}
      <FlatListScreen/>
     
    </View>
  )
}

export default App