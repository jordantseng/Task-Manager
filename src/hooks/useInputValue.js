import { useState, useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';

export const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const { editItem, editTask } = useContext(TaskListContext);

  return {
    value: editItem ? editItem.title : value,
    onChange: editItem
      ? (e) => editTask(e.target.value)
      : (e) => setValue(e.target.value),
    onReset: () => setValue(''),
  };
};
