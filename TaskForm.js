import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
    const[taskName, setTaskName] = useState('');
    const [recurrence, setRecurrence] = useState({
        frequency: 'none',
        interval: 1,
        startDate: new Date(),
        endDate: null,
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = {
          name: taskName,
          recurrence,
        };
        await axios.post('http://localhost:5000/api/tasks', newTask);
        setTaskName('');
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Task name"
            required
          />
          {/* Add inputs for recurrence options here */}
          <button type="submit">Add Task</button>
        </form>
    );
};
    
export default TaskForm;
