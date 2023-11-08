import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import api from "../apiAccess";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if(username === "" || password === "")
        return;

    const signIn = async () => {
        let responce = await api.signIn(username, password);
        if(responce.status == 200)
        {
            setUsername("");
            setPassword("");
            navigation.navigate('AllChats')
        }
    };
    signIn();

  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Login:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="Enter login"
        maxLength={15}
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        maxLength={15} 
      />

      <TouchableHighlight
        style={styles.button}
        onPress={handleLogin}
        underlayColor="#DDDDDD" 
      >
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableHighlight>


      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate('Registration')}
        underlayColor="#DDDDDD" 
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingLeft: 10,
    },
    button: {
      backgroundColor: '#007AFF',
      padding: 15,
      marginBottom: 20,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default LoginScreen;