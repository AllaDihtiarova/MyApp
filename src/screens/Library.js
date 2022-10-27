import { useState } from 'react';
import { Counter } from "../components/Counter";

export const Library = () => {
   const [counter, setCounter] = useState(0)
   const [isDisabled, setIsDisabled] = useState(true)

  const handleCounter = (type) => () => {
    switch (type) {
      case "increment":
        return setCounter(counter + 1);
      case "decrement":
        return setCounter(counter - 1);
      case "reset":
        return setCounter(0);
      case "switch":
        return setIsDisabled(!isDisabled);
      default:
        return null
    }
  }
  
  return (
    <div>
      <Counter
        counter={counter}
        isDisabled={isDisabled}
        handleIncrement={handleCounter("increment")}
        handleDecrement={handleCounter("decrement")}
        handleReset={handleCounter("reset")}
        handleSwitch={handleCounter("switch")} />
    </div>
  )
}