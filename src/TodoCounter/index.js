import './TodoCounter.css'
import { TodoContext } from '../TodoContext';
import React from 'react';

function TodoCounter(){
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

  return (
    <h1 className='contador'>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Todos
    </h1>
  );
}

export {TodoCounter};