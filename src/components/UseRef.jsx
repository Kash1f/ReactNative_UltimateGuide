import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef} from 'react';

const UseRef = () => {
  const myRef = useRef();
  const handleRef = () => {
    myRef.current.setNativeProps({
      text: 'Hello World',
      style: {color: 'white', backgroundColor: 'crimson'},
    });
  };

  return (
    <View>
      <TextInput ref={myRef} onPress={handleRef} />
    </View>
  );
};

export default UseRef;

const styles = StyleSheet.create({});
