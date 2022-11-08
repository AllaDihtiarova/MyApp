import { useState } from 'react';
import {Counter} from '../../Counter'
import intro from '../../../constants/intro'

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleCounter = type => () => {
    switch (type) {
      case intro.INCREMENT:
        return setCounter(counter + 1);
      case intro.DECREMENT:
        return setCounter(counter - 1);
      case intro.RESET:
        return setCounter(0);
      case intro.SWITCH:
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
        handleIncrement={handleCounter('increment')}
        handleDecrement={handleCounter('decrement')}
        handleReset={handleCounter('reset')}
        handleSwitch={handleCounter('switch')}
      />
    </div>
  );
};

export default CounterScreen;