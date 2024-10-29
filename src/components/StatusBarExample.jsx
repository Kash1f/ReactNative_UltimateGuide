import {View, Text, StatusBar, StyleSheet} from 'react-native';
import React from 'react';

const StatusBarExample = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="#6200Fe"
        hidden={false}
     
      />
      <Text style={styles.text}>StatusBar</Text>
    </View>
  );
};

export default StatusBarExample;

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: 'center',
    alignItems : 'center',
    backgroundColor : '#6200fe'
  },
    text : {
      color: '#FFF'
    }
})
/*

How to Style Status BarExplanation:

Let's say we have an application with a red theme and we want the entire screen to be red, or we want the StatusBar to be hidden if playing a game. So, we can style the status bar in React Native in many ways.

StatusBar component is self closed and works with some properties.

hidden = {true} - To hide content in games etc. By default value of StatusBar is {false}
barStyle = default, dark-content, light-content - According to your preference

*/
