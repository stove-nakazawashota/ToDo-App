import './App.css';
import Title from './Components/Title';
import React, { useState } from 'react';
import ToDoList from './Components/ToDoList';
import Form from './Components/Form';
import data from './data.json';

function App() {

  const [taskList, setTaskList] = useState(data);
  return (
    <>
      <Title></Title>
      <ToDoList></ToDoList>
      <Form></Form>
    </>
  );
}

export default App;
