import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import './AddToDo.css';

function AddToDo() {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== '') {
      try {
        await addDoc(collection(db, 'todos'), {
          title,
          complete: false,
        });
        setTitle('');
        Swal.fire('Added!', 'Your task has been added.', 'success');
      } catch (error) {
        console.error("Error adding document: ", error);
        Swal.fire('Error!', 'Failed to add your task.', 'error');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add_todo_form">
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddToDo;
