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
      {/* <Button title="Hide" onPress={() => setStatus(false)} />
      <Button title="Show" onPress={() => setStatus(true)} /> */}
      <Button title="Toggle" onPress={() => setStatus(!status)} />
    </View>
  );
};

export default HideShowToggle;

/*

Explanation of this code:

1. Jab button pe press kia jaiga to setStatus ki value false hojaigi yaani current state i.e status will be false, pehle true tha means component show ho raha tha but value false hone k baad hide hogya

2. Show karne k liye setStatus ki value true rakhni hai taa k jab hide ho to status value false hogi but Show pe setStatus function ki value true hai to status ki value true hojaigi

Now to toggle hide and show with one button:

1. By default status ki value true hai but now Button k click pe setStatus ki value !status karni hai kyun k jo bhi state hogi ye uska opposite kardega means agar true hai to component show hoga but jab button press hoga to true false hojaiga and comp hide hojaiga and similarly jab dubara press hoga button to false se true hojaiga means component show hojaiga

*/
