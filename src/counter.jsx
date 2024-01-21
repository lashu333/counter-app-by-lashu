// counter.jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount)=>prevCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const catchCounter = ()=>{
    if(count<10){ var paragraph = document.createElement('p');
        paragraph.textContent = 'MADE BY LASHU';
        paragraph.classList.add('added-paragraph');
        document.body.appendChild(paragraph);}
   
    if(count>10){
        var paragraphten = document.createElement('p');
        paragraphten.textContent = 'MADE BY LASHU';
        paragraphten.classList.add('added-paragraph-ten');
        document.body.appendChild(paragraphten);
    }

  }

  return (
    <>
      <div className='counter-container'>
        <p className='counter-display' onClick={catchCounter}>{count} </p>
        <button className='counter-button' onClick={incrementCount}>
          increment
        </button>
        <button className='counter-button' onClick={resetCount}>
          reset
        </button>
        <button className='counter-button' onClick={decrementCount}>
          decrement
        </button>
      </div>
    </>
  );
}

export default Counter;