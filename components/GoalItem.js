import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GoalItem;
