import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Components/Title';
import ToDoList from './Components/ToDoList';
import Form from './Components/Form'

function App() {
  return (
    <>
      <Title></Title>
      <ToDoList></ToDoList>
      <Form></Form>
    </>
  );
}

export default App;
