import React from 'react';
import './App.css';
import {Button,Buttonx} from './Button/Button';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline bg-gray-400">
      Hello world!
    </h1>
    <br></br>
      <Button label="HI"></Button><br></br>
      <Buttonx labelx="success dynamic"></Buttonx>
      
    </div>
  );
}

export default App;
