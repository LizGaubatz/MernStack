import './App.css';
import React, { useState } from 'react'
import ListForm from './components/ListForm';
import ToDoList from './components/ToDoList';
const App = () => {
  const [taskList, settaskList] = useState([]);

  const newTaskList = (taskList) => {
    settaskList(taskList);
  }

  const updateTaskList = (newTask) => {
    settaskList([...taskList, newTask]);
  }

  return (
    <div className="App">
      <div>
        <div>
          <h1>To Do List</h1>
          <ListForm updateTaskList={updateTaskList} />
          <ToDoList
            task={taskList}
            updateTaskList={newTaskList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
