// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../store/slice/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
