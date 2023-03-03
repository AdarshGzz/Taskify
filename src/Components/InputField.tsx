import * as React from 'react';
import './Style.css'
import {useRef} from 'react'

interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd(e: React.FormEvent):any
}

export const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}) =>{

  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <div className="input-field">
      <form 
       className="input" 
       onSubmit={
        (e)=>{
          handleAdd(e)
          inputRef.current?.blur()
        }}>
        <input 
        ref ={inputRef}
        className='input_box' 
        placeholder="Enter Task" 
        type = "input" 
        value={todo}
        onChange={(event)=>setTodo(event.target.value)}
        />
        <button className="input_submit" type="submit">
            Go
        </button>
      </form>
    </div>
  );
}

