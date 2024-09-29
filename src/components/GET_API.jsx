import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios';

const GET_API = () => {

    //component mount hone se pehle liefecycle method call hota hai, and saray lc method useEffect k andar hote hain, 
    //apni api ko pehle hi load karwa dena hai UI render hone se pehle, taa k data ko UI pe render karwa rahe ho to
    //UI render hone se pehle data API se fetch ho k achuka ho

    useEffect (()=>{
       

      axios.get("https://api.example.com/data");
      .then(response => console.log(data));
      .catch(error => console.log(error));
      )

    },[]);


  return (
    <View>
      <Text style={{fontSize: 24, marginBottom:1-0}}>GET API Method</Text>
    </View>
  )
}

export default GET_API;




//old code:

/*


 fetch('http://10.0.2.2:3000/users').then((response)=>{
            response.json().then((result)=>{
                console.log(result);
                
            });
        });





*/