import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');

    const handleAddTask = () => {
        if (title.trim() !== '') {
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
            keyboardType="default"
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

export default AddTask;