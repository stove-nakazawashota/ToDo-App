import './App.css';
import Title from './Components/Title';
import React, { useState } from 'react';
import ToDoList from './Components/ToDoList';
import Form from './Components/Form'
import { Task } from './Components/Task'

type Todo = {
  text: string
}

const initialState: Task[] = [
  {
    title: "テスト"
  },
  {
    title: "テスト2"
  }
]

// const [text, setText] = useState<string>('aaa')


function App() {
  const [tasks, setTasks] = useState(initialState)

  return (
    <>
      <Title></Title>
      <ToDoList></ToDoList>
      <Form></Form>
    </>
  );
}

export default App;
