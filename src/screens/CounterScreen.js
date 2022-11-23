import { useState } from 'react';
import { Counter } from '../components';
import { counterOperations } from '../constants/intro';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleCounter = type => () => {
    switch (type) {
      case counterOperations.INCREMENT:
        return setCounter(counter + 1);
      case counterOperations.DECREMENT:
        return setCounter(counter - 1);
      case counterOperations.RESET:
        return setCounter(0);
      case counterOperations.SWITCH:
        return setIsDisabled(!isDisabled);
      default:
        return null;
    }
  };

  return (
    <div>
      <Counter
        counter={counter}
        isDisabled={isDisabled}
        handleIncrement={handleCounter(counterOperations.INCREMENT)}
        handleDecrement={handleCounter(counterOperations.DECREMENT)}
        handleReset={handleCounter(counterOperations.RESET)}
        handleSwitch={handleCounter(counterOperations.SWITCH)}
      />
    </div>
  );
};

export default CounterScreen;