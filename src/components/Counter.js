import styles from '../styles/components/Counter.module.css';

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
      return 'green';
    } else if (counter < 0) {
      return 'red';
    } else {
      return 'black';
    }

    // color: counter > 0 ? 'green' : 'red'
  };
  const getBackgroundReset = { backgroundColor: isDisabled ? 'red' : 'gray' };
  const getBackgroundDecrement = {
    backgroundColor: isDisabled ? 'yellow' : 'gray',
  };
  const getBackgroundIncrement = {
    backgroundColor: isDisabled ? 'green' : 'gray',
  };

  return (
    <div className={styles.borderContainer}>
      <div className={styles.container}>
        <button
          type="button"
          disabled={!isDisabled}
          onClick={handleReset}
          className={styles.button}
          style={getBackgroundReset}
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
          style={getBackgroundDecrement}
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
          style={getBackgroundIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};
