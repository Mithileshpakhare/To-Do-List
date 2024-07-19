import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './components/Title';
import AddToDo from './components/AddToDo';
import ToDo from './components/ToDo';

import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    try {
      await updateDoc(doc(db, "todos", todo.id), {
        title: title,
        date: todo.complete ? todo.date : new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const handleToggleComplete = async (todo) => {
    try {
      await updateDoc(doc(db, "todos", todo.id), {
        complete: !todo.complete,
      });
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "todos", id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='App'>
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

export default App;
