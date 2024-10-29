import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm'; 

const App = () => {
  return (
    <Router>
      <div>
        <h1>To-Do List</h1>
        <Routes>
          <Route path="/" element={<TaskList/>} />
          <Route path="/add" element={<TaskForm/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
