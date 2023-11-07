import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import api from './apiAccess';

export default function App() {

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getForecast();
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
