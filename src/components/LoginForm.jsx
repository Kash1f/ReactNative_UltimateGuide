import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);

    //Once submit button is clicked, state variables will be set to empty
    setEmail('');
    setPassword('');
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Enter Email"
        value={email} //State ki value empty hogi to TextInput ki value bhi empty hojaigi
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={() => {
          handleLogin();
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});

/*
Logic of Login Form:

1. Whenever the email and password are entered, the onchangeText prop calls the setEmail and setPassword functions respectively. The setEmail and setPassword functions are used to set the state variables email and password respectively.

3. Whatever the values are for example, if the email is 'abc@gmail.com' and the password is '123456', the state variables email and password will be set to 'abc@gmail.com' and '123456' respectively. and if the email is 'xyz@gmail.com' and the password is '654321', the state variables email and password will be set to 'xyz@gmail.com' and '654321' respectively. the input values will change whatever the user enters, a abc abcd etc, the values are stored simalarly in the state variables.

4. When the user has entered the credentials, the user will then click the Login button which will then call the handleLogin function which will login the user and the state will be set to empty.

5. The setEmail and setPassword functions are used to set the state variables email and password to empty strings. This is done so that the user can enter the credentials again and again.

*/
