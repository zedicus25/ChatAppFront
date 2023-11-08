import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, Button, StyleSheet } from 'react-native';
import api from "../apiAccess";

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [paswordAgain, setPasswordAgain] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    if(username === "" || password === "" || paswordAgain === "" || password !== paswordAgain)
        return;

      const signUp = async () => {
          let responce = await api.signUp(username, password);
          if (responce.status == 200) {
              setUsername("");
              setPassword("");
              setPasswordAgain("");

              let responce1 = await api.signIn(username, password);
              if(responce1.status == 200)
                navigation.navigate('AllChats')
          }
      };
      signUp();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Login:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="Enter login"
        maxLength={20} 
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Enter password"
        maxLength={10} 
        secureTextEntry={true} 
      />
      <Text style={styles.label}>Password again:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPasswordAgain(text)}
        value={paswordAgain}
        placeholder="Enter password"
        maxLength={10} 
        secureTextEntry={true} 
      />

      <TouchableHighlight
        style={styles.button}
        onPress={handleRegistration}
        underlayColor="#DDDDDD" 
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.goBack()}
        underlayColor="#DDDDDD" 
      >
        <Text style={styles.buttonText}>Login</Text>
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

export default RegistrationScreen;