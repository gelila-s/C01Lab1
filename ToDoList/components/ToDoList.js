import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';
import 'react-native-get-random-values';

const ToDoList = ({ titles }) => {
    const [toDoList, setToDoList] = useState(titles.map((value) => ({ id: uuidv4(), taskTitle: value })));

    const addToDo = (title) => {
        const newToDoList = { id: uuidv4(), taskTitle: title };
        setToDoList((prevToDoLists) => [...prevToDoLists, newToDoList]);
    };

    const removeToDo = (id) => {
        setToDoList((prevToDoLists) => prevToDoLists.filter((value) => value.id==id));
    }

    return (
        <View style={styles.container}>
            {toDoList.map((ToDoList) => (
            <View key={ToDoList.id}>
                <Text style={styles.text}>{ToDoList.title}</Text>
                <View style={styles.buttonContainer}>
                <Button title="Remove" onPress={() => removeToDo(ToDoList.id)} />
                </View>
            </View>
            ))}
            <AddTask onAddTask = {addToDo} />
        </View>
    );
}

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

ToDoList.defaultProps = {
    title: [],
};

export default ToDoList;



