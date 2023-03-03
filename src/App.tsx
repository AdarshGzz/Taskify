import React,{FC, useState} from 'react';
import './App.css';
import { InputField } from './Components/InputField';

const App:FC = () => {

  const [todo, setTodo] = useState<string>('')
  


  return (
    <div className="App">
      <div className="heading">
        <h1>Taskify</h1>
      </div>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
