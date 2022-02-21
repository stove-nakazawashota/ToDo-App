import React from 'react';
import './App.css';
import Title from './Components/Title';
import ToDoList from './Components/ToDoList';
import Form from './Components/Form'

function App() {
  const input: HTMLInputElement = document.querySelector('.input')!

  return (
    <>
      <Title></Title>
      <ToDoList></ToDoList>
      <Form></Form>
    </>
  );
}

export default App;
