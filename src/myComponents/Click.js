import { React, useState } from 'react'
import "../css/Click.css"
export default function Click() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(count => count + 1);
  };
 
  const decrease = () => {
    setCounter(count => count - 1);
  };

  const reset = () =>{
    setCounter(0)
  }
 
  return (
    <div className="counter">
      <h1>Click Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}