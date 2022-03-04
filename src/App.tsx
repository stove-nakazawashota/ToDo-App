import data from './data.json';
import Form from './Components/Form';
import React, { useState } from 'react';
import Title from './Components/Title';
import ToDoList from './Components/ToDoList';
import './App.css';
import ToDo from './Components/ToDo';

// type ToDo = {
//   title: string,
//   id: number
// }

function App() {
  const [taskList, setTaskList] = useState<ToDo[]>(data);
  const addTaskList = () => {
    const newId = taskList.length + 1
    const textInput: HTMLInputElement = document.querySelector('.textinput')!
    const newTitle: string = textInput.value
    const newTask: ToDo = {
      id: newId,
      title: newTitle
    }
    setTaskList([...taskList, newTask])
  }


  return (
    <>
      <Title></Title>
      <ToDo taskList={taskList}></ToDo>
      <ToDoList taskList={taskList}></ToDoList>
      <Form addTaskList={addTaskList}></Form>
    </>
  );
}

export default App;
