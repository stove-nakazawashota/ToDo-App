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
    const newId = taskList.length + 1 // idを＋１する
    const textInput: HTMLInputElement = document.querySelector('.textinput')! // フォームの値を取得する
    const newTitle: string = textInput.value // textinputのvalueを取得する
    const newTask: ToDo = { // 
      id: newId,
      title: newTitle
    }
    setTaskList([...taskList, newTask])
  }


  const deleteToDo = () => {
    const getChecked: NodeListOf<HTMLInputElement> = document.querySelectorAll('.check')! // inputのチェックボックスを全て取得
    let newToDo: ToDo[] = taskList
    for (let i = 0; i < getChecked.length; i++) { //  ループ処理
      if (getChecked[i].checked === true) { // もしチェックがついていたら
        newToDo = newToDo.filter((Task) => (getChecked[i].value !== Task.id.toString())) // getCheckedでdata.jsonのIDと比較して、チェックの付いたToDoを消す
        getChecked[i].checked = false // チェックを外す
      }
    }
    setTaskList(
      newToDo
    )
  }
  // console.log(taskList)
  // taskList.filter((Task) => (getChecked[i].value !== Task.id.toString()))

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