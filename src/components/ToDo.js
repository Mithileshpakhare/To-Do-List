import React, { useState } from 'react';
import './ToDo.css';

function ToDo({ todo, toggleComplete, handleEdit, handleDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleSave = () => {
    handleEdit(todo, newTitle);
    setIsEditing(false);
  };

  return (
    <div className="todo_item">
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => toggleComplete(todo)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
          {todo.title}
        </span>
      )}
      <div className="actions">
        {isEditing ? (
          <button onClick={handleSave} className="save">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="edit">Edit</button>
        )}
        <button onClick={() => handleDelete(todo.id)} className="delete">Delete</button>
      </div>
    </div>
  );
}

export default ToDo;
