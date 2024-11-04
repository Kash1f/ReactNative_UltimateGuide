import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios';

const GET_API_LIST = () => {

    const [myData, setMyData] = useState([]);
    useEffect(() => {
        axios.get('')
        .then(response => {
            setMyData(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    const renderItem = ({item}) => {
        return (
            <View>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            </View>
        )
    }

  return (
    <View>
      <Text>Users</Text>
      <FlatList
      data={myData}
      renderItem={}
      />
    </View>
  )
}

export default GET_API_LIST

const styles = StyleSheet.create({})