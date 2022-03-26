import React from 'react';
import './App.css';
// import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Header from './menu/Header';

function App() {
  return (
    <>
      <Header />
    <div className="todo-app">
      <TodoList />
    </div>
    </>
  );
}

export default App;
