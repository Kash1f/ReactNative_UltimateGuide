import { View, Text } from 'react-native'
import React from 'react'
import GET_API from './src/components/GET_API'
import AnimatedCardFlip from './src/components/AnimatedCardFlip'
import AsyncStorageExample from './src/components/AsyncStorageExample'
import POST_API from './src/components/POST_API'

const App = () => {
  return (
    <View>
      {/* <GET_API/> */}
      {/* <AnimatedCardFlip/> */}
      {/* <AsyncStorageExample/> */}
      <POST_API/>
    </View>
  )
}

export default App