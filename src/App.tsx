import React,{FC, useState} from 'react';
import './App.css';
import { InputField } from './Components/InputField';
import {TodoList} from './Components/TodoList'
import { Todo } from './Components/Model';

const App:FC = () => {

  const [todo, setTodo] = useState<string>('')

  const [todos, setTodos] = useState<Todo[]>([])
  
  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);
    }
  }

  console.log(todos)

  return (
    <div className="App">
      <div className="heading">
        <h1>Taskify</h1>
      </div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
