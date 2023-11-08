import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const AllChats = ({ navigation }) => {

  
    return (
      <View style={styles.container}>
        <Text>Main Page</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    }
  });

  export default AllChats;