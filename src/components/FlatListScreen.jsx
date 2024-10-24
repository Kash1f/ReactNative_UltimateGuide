import {View, Text, FlatList} from 'react-native';
import React from 'react';

const FlatListScreen = () => {
  const data = ['Dev', 'Kyrex', 'Sam'];

  return (
    <View>
      <FlatList
      
      data={data}
      renderItem={({item}) => <Text key={item.id}>{item}</Text>}
      
      
      />
    </View>
  );
};

export default FlatListScreen;
