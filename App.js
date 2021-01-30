import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);
  const handleChangeText = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, enteredGoal]);
    setEnteredGoal('');
  };
  return (
    <View style={styles.container}>
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
      <View>
        {goals.map((goal) => {
          return (
            <View key={goal} style={styles.listItem}>
              <Text style={styles.listItemText}>{goal}</Text>
            </View>
          );
        })}
      </View>
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
    borderBottomColor: '#e96d49',
    borderBottomWidth: 1,
    color: '#ffffff',
    marginVertical: 5,
    width: '80%',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItem: {
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#282828',
    borderRadius: 5,
    color: '#ffffff',
  },
  listItemText: {
    color: '#ffffff',
  },
});
