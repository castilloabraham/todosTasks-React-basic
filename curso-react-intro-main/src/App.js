import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'
import { CreateTodoButton } from './CreateTodoButton'
import './App.css';
import React from 'react';

const defaultTodos = [
	{ text: 'Hacer el curso', completd: true },
	{ text: 'Hacer el curso2', completd: false },
	{ text: 'Hacer el curso3', completd: false },
	{ text: 'Hacer el curso4', completd: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completado={5} totales={8}/>

			<TodoSearch />
			
			<TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
			
			<CreateTodoButton />
    </React.Fragment>
  );
}


export default App;
