// src/components/TodoList.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, removeTodo } from "./store/slice/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                {todo.text}
              </span>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
