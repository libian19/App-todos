import React from 'react';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButon.css';


function CreateTodoButon({setOpenModal}) {
  return (
    <button
      className='CreateTodoButon'
      onClick={() => {setOpenModal(state => !state)}}
    >
      Agrega una Tarea
    </button>
  )
}
export { CreateTodoButon };