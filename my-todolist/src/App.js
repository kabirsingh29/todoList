import React, { useState, useEffect } from 'react'
import './App.css';
import AllTasksHtml from './components/AllTasksHtml'
import taskFormSubmit from './components/taskFormSubmit'
import RemoveAll from './components/RemoveAll'
import Header from './components/Header'

function App() {
  const [task, setTask] = useState(() => {
    return [];
  });

  // useEffect(() => {
  //     console.log('useEffect ', task);
  // }, [task]);

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <div className="main_todo_app_wrapper">
          <div className="main_todo_app_heading">
            <span className="main_todo_app_headingtext">your daily list...</span>
            <RemoveAll task={task} setTask={setTask}/>
          </div>
          <div className="main_todo_app_inputWrapper">
            <label className="main_todo_app_label">
              Enter your next task
            </label>
            <form className="main_todo_task_form" onSubmit = {(e) => taskFormSubmit(e, task, setTask)}>
              <input type="text" className="main_todo_app_input" name="task"/>
              <button type="submit" className="main_todo_app_submit">Add your task</button>
            </form>
            <div className="main_todo_allTasks_wrapper">
              <ul className="main_todo_allTasks">
                <AllTasksHtml task={task} setTask={setTask}/>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
