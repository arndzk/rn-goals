import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const handleChangeText = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder="Enter goal..."
        placeholderTextColor="#b3b3b3"
        selectionColor="#e96d49"
        style={styles.textInput}
        onChangeText={handleChangeText}
        value={enteredGoal}
      ></TextInput>
      <Button
        title="Add"
        color="#e96d49"
        onPress={() => props.onAddGoal(enteredGoal)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
