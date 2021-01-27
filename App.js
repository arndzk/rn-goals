import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Enter goal..."
          style={styles.textInput}
        ></TextInput>
        <Button title="Add" color="#e96d49" />
      </View>
      <View></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#121212',
  },
  textInput: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: '#ffffff',
    marginVertical: 5,
  },
});
