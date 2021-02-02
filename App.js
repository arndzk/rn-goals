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
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const addGoalHandler = (goalTitle) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
  };
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        style={{ padding: 10 }}
        keyExtractor={(item, index) => item.key}
        data={goals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
