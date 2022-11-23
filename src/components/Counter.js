import styles from '../styles/components/Counter.module.css';
import { Colors } from '../theme';

const Counter = props => {
  const {
    counter,
    isDisabled,
    handleIncrement,
    handleDecrement,
    handleReset,
    handleSwitch,
  } = props;

  const {increment, decrement, reset} = (() => {
    if(isDisabled) {
      return {increment: Colors.green, decrement: Colors.gold, reset: Colors.red}
    } else {
      return {increment: Colors.gray2, decrement: Colors.gray2, reset: Colors.gray2}
    }
  })()

  const {color} = (() => {
    if(counter > 0) {
      return {color: Colors.green}
    } else if (counter < 0) {
      return {color: Colors.red}
    } else {
      return {color: Colors.black}
    }
  })()

  return (
    <div className={styles.borderContainer}>
      <div className={styles.container}>
        <button
          type="button"
          disabled={!isDisabled}
          onClick={handleReset}
          className={styles.button}
          style={{backgroundColor: reset}}
        >
          Reset
        </button>
        <button type="button" onClick={handleSwitch} className={styles.button}>
          {isDisabled ? 'Disabled' : 'Enabled'}
        </button>
      </div>
      <div className={styles.container}>
        <button
          type="button"
          disabled={!isDisabled}
          onClick={handleDecrement}
          className={styles.counter}
          style={{backgroundColor: decrement}}
        >
          -
        </button>
        <div className={styles.counter} style={{ color: color }}>
          {counter}
        </div>
        <button
          type="button"
          disabled={!isDisabled}
          onClick={handleIncrement}
          className={styles.counter}
          style={{backgroundColor: increment}}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter