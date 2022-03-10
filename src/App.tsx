import data from './data.json';
import Form from './Components/Form';
import React, { useState } from 'react';
import Title from './Components/Title';
import ToDoList from './Components/ToDoList';
import './App.css';
import ToDo from './Components/ToDo';
import TestButton from './Components/TestButton';

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

  const deleteToDo = () => {
    setTaskList(
      taskList.filter((addTaskList) => (taskList !== taskList))
    )
  }

  const test = () => {
    const Check: HTMLInputElement = document.querySelector(".check")!

    if (Check.checked) {
      deleteToDo()
      console.log("Hello")
    }
  }

  return (
    <>
      <Title></Title>
      <ToDo taskList={taskList}></ToDo>
      <TestButton test={test}></TestButton>
      <ToDoList taskList={taskList}></ToDoList>
      <Form addTaskList={addTaskList}></Form>
    </>
  );
}

export default App;
