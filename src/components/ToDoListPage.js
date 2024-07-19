import React from 'react';
import Title from './Title';
import AddToDo from './AddToDo';
import ToDo from './ToDo';
import './ToDoListPage.css';

function ToDoListPage({ todos, handleToggleComplete, handleEdit, handleDelete }) {
  return (
    <div className='todo-list-page'>
      <Title />
      <AddToDo />
      <div className='todo_container'>
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            toggleComplete={handleToggleComplete}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoListPage;
