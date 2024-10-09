import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const GET_API = () => {
  const [myData, setMyData] = useState([]);

  //component mount hone se pehle liefecycle method call hota hai, and saray lc method useEffect k andar hote hain,
  //apni api ko pehle hi load karwa dena hai UI render hone se pehle, taa k data ko UI pe render karwa rahe ho to
  //UI render hone se pehle data API se fetch ho k achuka ho

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/users').then(result => {
      // console.log(result.data);
      setMyData(result.data);  //myData me data ko store karwaiga jab result.data aaiga, array wale data ko myData me update karwa dega setMyData
    })
  }, []);

  return (
    <View>
      <Text style={{fontSize: 24, marginBottom:10}}>GET API Method</Text>
      
        {/*map will let us iterate over the array of objects */}
        {myData.map((item)=>(
          <Text key={item.id}style={{fontSize: 20, marginBottom:10}}>{item.name}</Text>
        ))}
      
    </View>
  );
};

export default GET_API;

//old code:

/*


 fetch('http://10.0.2.2:3000/users').then((response)=>{
            response.json().then((result)=>{
                console.log(result);
                
            });
        });





*/
