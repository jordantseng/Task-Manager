import { useState, useContext, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

export const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const { editItem } = useContext(TaskListContext);

  useEffect(() => {
    if (editItem) {
      setValue(editItem.title);
    }
  }, [editItem]);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
    onReset: () => setValue(''),
  };
};
