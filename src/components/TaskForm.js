import React, { useContext } from 'react';
import { useInputValue } from '../hooks/useInputValue';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
  const text = useInputValue('');
  const { editItem, addTask, clearList, editTask } = useContext(
    TaskListContext
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (editItem) {
      editTask(text.value, editItem.id);
    } else {
      addTask(text.value);
    }
    text.onReset();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Add Task.."
        required
        {...text}
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {!editItem ? 'Add Task' : 'Edit Task'}
        </button>
        <button type="button" className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
