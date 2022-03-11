import './App.css';
import data from './data.json';
import Form from './Components/Form';
import React, { useState } from 'react';
import Title from './Components/Title';
import ToDoList from './Components/ToDoList';
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
    const getChecked: NodeListOf<HTMLInputElement> = document.querySelectorAll('.check')!
    const newToDo: ToDo[] = taskList
    for (let i = 0; i < getChecked.length; i++) {
      if (getChecked[i].checked === true) {
        newToDo.filter((Task) => (getChecked[i].value !== Task.id.toString()))
        console.log(newToDo)
        console.log(getChecked[i].value)
        console.log(newToDo[i].id.toString())
      }
    }
    setTaskList(
      newToDo
    )
  }
  // console.log(taskList)
  // taskList.filter((Task) => (getChecked[i].value !== Task.id.toString()))

  // const test = () => {
  //   const Check: HTMLInputElement = document.querySelector(".check")!
  //   if (Check.checked) {
  //     deleteToDo()
  //     console.log("Hello")
  //   }
  // }

  return (
    <>
      <Title></Title>
      <ToDo taskList={taskList}></ToDo>
      <TestButton deleteToDo={deleteToDo}></TestButton>
      <ToDoList taskList={taskList}></ToDoList>
      <Form addTaskList={addTaskList}></Form>
    </>
  );
}

export default App;
