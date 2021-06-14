import React from 'react';
import {TodoList} from './models/model';
import TodoLi from './components/TodoList';
import TodoInput from './components/TodoInput';


const App: React.FC = () => {

  const [todos, setTodos] = React.useState<TodoList[]>([]);

  const onAddHandler = (text: string) => {
    setTodos(prevTodos=> [...prevTodos, {id: Math.random(), text}])
  }

  const onDeleteHandler = (todoId: number) => {
    setTodos(prevTodos=> prevTodos.filter(todo => todo.id !== todoId))
  }

  return (
    <div className="App">
      <TodoInput onAdd={onAddHandler} />
      <TodoLi items={todos} onDelete={onDeleteHandler}/> 
    </div>
  );
}

export default App;
