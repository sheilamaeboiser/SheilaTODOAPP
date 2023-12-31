import React, { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskInputField from './components/TaskInputField';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.scrollView}>
        {
          tasks.map((task, index) => {
            return (
              <View key={index} style={styles.taskContainer}>
                <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)} />
              </View>
            );
          })
        }
      </ScrollView>
      <TaskInputField addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf4ee',
  },
  heading: {
    color: '#383a3a',
    fontSize: 40,
    fontWeight: '600',
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 20,
    textAlign: 'center',
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});