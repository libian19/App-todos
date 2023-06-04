import React from 'react';
import { TodoCount } from '../TodoCount';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoMsj } from '../TodoMsj';
import { CreateTodoButon } from '../CreateTodoButon';
import { useLocalStorage } from './useLocalStorage';
/*
const defTodos = [
  {text: 'Estudiar programación', completed: true},
  {text: 'Hacer las compras', completed: true},
  {text: 'Hacer los quehaceres de la casa', completed: false},
  {text: 'Ir a caminar 1 hora', completed: false}
];
localStorage.setItem('itemName', JSON.stringify(defTodos));
*/

function App() {
 
  const [todos, saveTodos]= useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue]= React.useState(''); 
  
  const todosCompleted = todos.filter( 
    todo => !!todo.completed
    ).length;
  const todosTotal = todos.length;

  const searchTodos = todos.filter (
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  ); 

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( 
      (todo) => todo.text === text);
    newTodos[todoIndex].completed ? 
    newTodos[todoIndex].completed = false :
    newTodos[todoIndex].completed = true
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( 
      (todo) => todo.text === text);
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }
    
  return (
    <>
      <TodoCount 
        completed={todosCompleted} 
        total={todosTotal} 
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}  
      />

      <TodoList>
        {searchTodos.map(todo => ( 
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete= { () => completeTodo(todo.text)}
            onDelete={ () => deleteTodo(todo.text)} 
          />
        ))}
      
      </TodoList>

      <TodoMsj
        completed={todosCompleted} 
        total={todosTotal} 
        //parsedTodos={item}
      >
      </TodoMsj>

      <CreateTodoButon/>

    </>
  );
}

export default App;
