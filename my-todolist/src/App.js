import React, { useState, useEffect } from 'react'
import './App.css';
import AllTasksHtml from './components/AllTasksHtml'
import taskFormSubmit from './components/taskFormSubmit'


function App() {
  const [task, setTask] = useState([]);

  // useEffect(() => {
  //   if (task.length > 0
  //     && task.indexOf(task) === -1) {
  //     console.log('useEffect');
  //   }
  // }, [task]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="main_todo_app_wrapper">
          <div className="main_todo_app_heading">your daily list...</div>
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
                <AllTasksHtml task={task}/>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
