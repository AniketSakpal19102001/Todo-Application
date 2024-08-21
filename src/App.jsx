// src/App.js
import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
