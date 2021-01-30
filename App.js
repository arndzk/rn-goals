import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  StatusBar,
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);
  const handleChangeText = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    setEnteredGoal('');
  };
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Enter goal..."
          placeholderTextColor="#b3b3b3"
          selectionColor="#e96d49"
          style={styles.textInput}
          onChangeText={handleChangeText}
          value={enteredGoal}
        ></TextInput>
        <Button title="Add" color="#e96d49" onPress={addGoalHandler} />
      </View>
      <FlatList
        style={{ padding: 10 }}
        keyExtractor={(item, index) => item.key}
        data={goals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  textInput: {
    borderBottomColor: '#e96d49',
    borderBottomWidth: 1,
    color: '#ffffff',
    width: '80%',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#181818',
    padding: 10,
  },
  listItem: {
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#404040',
    borderRadius: 5,
    color: '#ffffff',
  },
  listItemText: {
    color: '#ffffff',
  },
});
