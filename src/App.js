import React from 'react';
import './App.css';
import TodoList from "./todo-list.component";

// Steps: 
// 1. new-todo-form.comp creates new todo with id and completed:false
// 2. todo.comp renders different instances (completed? isEditing?)
/* 3. todo-list.comp maps all the todos and passes down the state/todo changing
      functions like ( create, remove, update, toggleCompletion) */
function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
