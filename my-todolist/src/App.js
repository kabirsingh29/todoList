import React, { useState, useEffect } from 'react'
import './App.css';
import AllTasksHtml from './components/AllTasksHtml'
import taskFormSubmit from './components/taskFormSubmit'
import RemoveAll from './components/RemoveAll'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Mainpage from './components/Mainpage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Account from './components/Account'

function App() {
  const [task, setTask] = useState(() => {
    return [];
  });

  // useEffect(() => {
  //     console.log('useEffect ', task);
  // }, [task]);

  return (
    <Container className="custom-container d-flex align-items-center justify-content-center">
    <div className="w-100">
    <div className="App">
      <header className="App-header">
        <Router>
        <Header/>
          <Routes>
            <Route path="/todoList" element={<Mainpage RemoveAll={RemoveAll} AllTasksHtml={AllTasksHtml} taskFormSubmit={taskFormSubmit} task={task} setTask={setTask}/>}>
            </Route>
            <Route path="/account" element={<Account/>}>
            </Route>
          </Routes>
        </Router>
        {/* <Mainpage RemoveAll={RemoveAll} AllTasksHtml={AllTasksHtml} taskFormSubmit={taskFormSubmit} task={task} setTask={setTask}/> */}
      </header>
    </div>
    </div>
    </Container>
  );
}

export default App;
