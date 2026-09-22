import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Изучить основы реакта', completed: true },
    { id: 2, text: 'Понять иммутабельность в useState', completed: false },
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h2>Мой Todo-List</h2>
      
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Что надо сделать?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
              />
              {task.completed ? <s>{task.text}</s> : task.text}
            </label>
            <button onClick={() => handleDeleteTask(task.id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
