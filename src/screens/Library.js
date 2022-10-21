import { useState } from 'react';
import { Counter } from "../components/Counter";

export const Library = () => {
   const [counter, setCounter] = useState(0)
  const [isDisabled, isSetDisabled] = useState(true)
  
  const handleCounterIncrement = () => {
    setCounter(counter + 1);
  };

  const handleCounterDecrement = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0)
  }

  const handleDisabled = () => {
    isSetDisabled(!isDisabled) 
  }
  return (
    <>
      <Counter
        counter={counter}
        isDisabled={isDisabled}
        handleCounterIncrement={handleCounterIncrement}
        handleCounterDecrement={handleCounterDecrement}
        handleReset={handleReset}
        handleDisabled={ handleDisabled} />
    </>
  )
}