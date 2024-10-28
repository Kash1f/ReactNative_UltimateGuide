import { View, Text } from 'react-native'
import React, { useState } from 'react'

const HideShowToggle = () => {

  const [status, setStatus] = useState(true);

  return (
    <View>
      <Text style={{fontSize:30}}>HideShowToggle</Text>
    </View>
  )
}

export default HideShowToggle