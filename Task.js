import React from 'react';

const Task = ({ task, deleteTask }) => {
  return (
    <li>
      <span>{task.name}</span>
      <button onClick={() => deleteTask(task._id)}>Delete</button>
      {/* Add more functionality for editing and marking as completed */}
    </li>
  );
};

export default Task;