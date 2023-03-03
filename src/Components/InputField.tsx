import * as React from 'react';
import './Style.css'

interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

export const InputField:React.FC<Props> = ({todo,setTodo}) =>{
  return (
    <div className="input-field">
      <form className="input">
        <input 
        className='input_box' 
        placeholder="Enter Task" 
        type = "input" 
        value={todo}
        onChange={(event)=>setTodo(event.target.value)}
        />
        <button className="input_submit">
            Go
        </button>
      </form>
    </div>
  );
}

