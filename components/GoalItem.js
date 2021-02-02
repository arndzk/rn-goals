import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
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
