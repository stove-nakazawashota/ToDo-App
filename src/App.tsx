import './App.css';
import Title from './Components/Title';
import React, { useState } from 'react';
import ToDoList from './Components/ToDoList';
import Form from './Components/Form';
import data from './data.json';

type ToDo = {
  title: string,
  id: number
}

function App() {
  const [taskList, setTaskList] = useState<ToDo[]>(data);
  return (
    <>
      <Title></Title>
      <ToDoList></ToDoList>
      <Form></Form>
    </>
  );
}

export default App;
