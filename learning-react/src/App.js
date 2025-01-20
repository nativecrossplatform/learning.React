import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import Title from './components/Title';
import React, { useState } from 'react';
function App() 
{
  const [counter,setCounter] = useState(0);
  const increment = () =>
  {
      setCounter(counter+1);
  }
  const decrement = () =>
  {
      if(counter!=0)
      {
      setCounter(counter-1);
      }
      else
      {
      alert("Counter Cannot Go Below 0")
      }
  }
  return (
    <div id="container" className="container">
    <Title title="Counter"/>
    <Display result={counter}/>
    <div id="but_container" className="but_container">
    <Button func={increment} nm="Increment"/>
    <Button func={decrement} nm="Decrement"/>
    </div>
    </div>
  );
}
export default App;
