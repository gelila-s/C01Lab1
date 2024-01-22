import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');

    const handleAddTask = () => {
        if (initialValue.trim() !== '') {
            onAddTask(title);
            setTitle('');
        }
    };

    return (
        <View style={styles.AddTask}>
          <TextInput
            style={styles.input}
            placeholder="Enter a task"
            value={title}
            onChangeText={(text) => setTitle(text)}
            keyboardType="alphanumeric"
            returnKeyType="done"
          />
          <Button title="Add Task" onPress={handleAddTask} />
        </View>
      );
}

const styles = StyleSheet.create({
    addTask: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});