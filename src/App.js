import React from 'react';
import { TodoCount } from './TodoCount';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButon } from './CreateTodoButon';

const defTodos = [
  {text: 'Estudiar programación', completed: true},
  {text: 'Hacer las compras', completed: true},
  {text: 'Hacer los quehaceres de la casa', completed: false},
  {text: 'Ir a caminar 1 hora', completed: false}
];

function App() {
  const [todos, setTodos]= React.useState(defTodos);
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

  console.log('Buscamos '+ searchValue)
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
          />
        ))}
      
      </TodoList>

      <CreateTodoButon/>

    </>
  );
}

export default App;
