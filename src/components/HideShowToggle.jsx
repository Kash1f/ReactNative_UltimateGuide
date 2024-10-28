import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import My from './My';

const HideShowToggle = () => {
  const [status, setStatus] = useState(true);

  return (
    <View>
      <Text style={{fontSize: 30}}>HideShowToggle</Text>
      {
        // ? agar status ki value true hai to My comp show hojaiga, : agar false hai to null show hojaiga, My ki value hide hojaigi
        status ? <My /> : null
      }
      <Button title="Hide" onPress={() => setStatus(false)} />
      <Button title="Show" onPress={() => setStatus(true)} />
    </View>
  );
};

export default HideShowToggle;

//Jab button pe press kia jaiga to setStatus ki value false hojaigi yaani current state i.e status will be false, pehle true tha means component show ho raha tha but value false hone k baad hide hogya

//Show karne k liye setStatus ki value true rakhni hai taa k jab hide ho to status value false hogi but Show pe setStatus function ki value true hai to status ki value true hojaigi