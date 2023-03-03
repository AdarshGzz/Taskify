import React from 'react'
import './Style.css'
import { Todo } from './Model';

interface Props{
    todos:Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className="todos">
      {
        todos.map((todo) =>(
            <li>{todo.todo}</li>
        ))
      }
    </div>
  )
}


