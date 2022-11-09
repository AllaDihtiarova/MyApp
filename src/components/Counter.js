import styles from '../styles/components/Counter.module.css';
import { Colors } from '../theme';

export const Counter = props => {
  const {
    counter,
    isDisabled,
    handleIncrement,
    handleDecrement,
    handleReset,
    handleSwitch,
  } = props;

  const getColor = () => {
    if (counter > 0) {
      return Colors.green;
    } else if (counter < 0) {
      return Colors.red;
    } else {
      return Colors.black;
    }
  };
  const getBGReset = { backgroundColor: isDisabled ? Colors.red : Colors.gray2 };
  const getBGDecrement = {
    backgroundColor: isDisabled ? Colors.gold : Colors.gray2,
  };

  const getBGIncrement = {
    backgroundColor: isDisabled ? Colors.green : Colors.gray2,
  };

  return (
    <div className={styles.borderContainer}>
      <div className={styles.container}>
        <button
          type="button"
          disabled={!isDisabled}
          onClick={handleReset}
          className={styles.button}
          style={getBGReset}
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
          style={getBGDecrement}
        >
          -
        </button>
        <div className={styles.counter} style={{ color: getColor() }}>
          {counter}
        </div>
        <button
          type="button"
          disabled={!isDisabled}
          onClick={handleIncrement}
          className={styles.counter}
          style={getBGIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};
