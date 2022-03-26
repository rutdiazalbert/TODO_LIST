import React, { useState } from "react";
import "./App.css";
import TodoListHousework from "./components/Housework/TodoListHousework";
import Layout from "./components/Layout";
// import TodoForm from './components/TodoForm';
// import TodoList from "./components/TodoListShopping";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./menu/Header";
import TodoListShopping from "./components/Shopping/TodoListShopping";
import TodoListWork from "./components/Work/TodoListWork";
import TodoListStudies from "./components/Studies/TodoListStudies";

function App() {
  // const [state, setState] = useState();
  // const navigation = (value) => {
  //   setState(value);
  // };
  return (
    <>
      <Header />
      <div className="todo-app">
        {/* <Layout state={state} /> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TodoListShopping />} />
             
            <Route path='/housework' element={<TodoListHousework />} />
              
            <Route path='/work' element={<TodoListWork />} />
            
            <Route path='/studies' element={<TodoListStudies />} />
           

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
