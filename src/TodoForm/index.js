import React from "react";
import './TodoForm.css'
import { TodoContext } from '../TodoContext'

function TodoForm () {
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }
  const onCancel = () => {
    setOpenModal(false)
  }
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form
      onSubmit={onSubmit}
    >
      <label>Escribe un nuevo TODO</label>
      
      <textarea
        placeholder = 'Escribe aqui'
        value={newTodoValue}
        onChange={onChange}
        required
      >
      </textarea>
   
      <button
        type="button"
        onClick = {onCancel}
        className="TodoForm-button  TodoForm-button-cancel"
      >Cancelar
      </button>

      <button
        type="submit"
        onClick= {onSubmit}
        className="TodoForm-button TodoForm-button-add"
      >Agregar
      </button>
    </form>
  )
}
export {TodoForm}