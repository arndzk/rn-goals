import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const handleChangeText = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };
  useEffect(() => {
    console.log(props.visible);
  }, []);
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Enter goal..."
          placeholderTextColor="#b3b3b3"
          selectionColor="#e96d49"
          style={styles.textInput}
          onChangeText={handleChangeText}
          value={enteredGoal}
        ></TextInput>
        <View style={styles.buttonWrapper}>
          <Button title="Add" color="#e96d49" onPress={addGoalHandler} />
          <Button title="Cancel" color="#e96d49" onPress={props.onCancelGoal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: '#e96d49',
    borderBottomWidth: 1,
    color: '#ffffff',
    width: '80%',
    marginBottom: 10,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818',
    padding: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default GoalInput;
