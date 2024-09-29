import { View, Text } from 'react-native'
import React from 'react'
import GET_API from './src/components/GET_API'
import AnimatedCardFlip from './src/components/AnimatedCardFlip'

const App = () => {
  return (
    <View>
      <GET_API/>
      {/* <AnimatedCardFlip/> */}
    </View>
  )
}

export default App