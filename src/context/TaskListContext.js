import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { title: 'Read the book', id: 1 },
    { title: 'Wash the car', id: 2 },
    { title: 'Write some code', id: 3 },
  ]);

  const [editItem, setEditItem] = useState(null);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
    setEditItem(null);
  };

  const findItem = (id) => {
    setEditItem(tasks.find((task) => task.id === id));
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );

    setTasks(newTasks);
    setEditItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        editItem,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
      }}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
