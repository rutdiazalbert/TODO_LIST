import React from 'react'
import TodoListHousework from './Housework/TodoListHousework';
import TodoListShopping from './Shopping/TodoListShopping';
import TodoListStudies from './Studies/TodoListStudies';
import TodoListWork from './Work/TodoListWork';


const Layout = ({state}) => {
    switch (state) {
        default:
            return (
                <TodoListShopping />
            )
        case 'shopping':
          return (
            <TodoListShopping />
        
            );
        case 'housework':
          return (
            <TodoListHousework />
          );
        case 'work':
          return (
            <TodoListWork />
          );
        case 'studies':
          return (
            <TodoListStudies />
          );
      }
}

export default Layout