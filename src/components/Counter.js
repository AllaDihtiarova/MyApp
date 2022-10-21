import { useState } from 'react';
import styles from "../styles/components/Counter.module.css" 

export const Counter = () => {
  
  // const [counter, setCounter] = useState(JSON.parse(window.localStorage.getItem("counter")) ?? 0);
  const [counter, setCounter] = useState(0)
  const [disabled, setDisabled] = useState(true)
  
  const handleCounterIncrement = () => {
    setCounter(state => state + 1);
  };

  const handleCounterDecrement = () => {
    setCounter(state => state - 1);
  };

  const handleReset = () => {
    setCounter(0)
  }

  const handleDisabled = () => {
    setDisabled(!disabled) 
  }
 
  return (
    <div style={{border: "2px solid black", width: "304px"}}>
    <div className={styles.container}>
      <button type="button" onClick={handleReset} className={styles.button} style={{ backgroundColor: "red" }}>Reset</button>
      <button type="button" onClick={handleDisabled} className={styles.button} style={{ backgroundColor: "blue" }}>{ disabled ? "Disabled" : "Enabled"}</button>
    </div >
    <div className={styles.container}>
      <button type="button" onClick={disabled ? handleCounterDecrement : console.log("нажмите кнопку Enable")} className={disabled ? styles.counterDecrement : styles.toggle} >-</button>
      <div className={styles.counter} style={{color: (counter<0) ? "red" : "green"}}>{ counter }</div>
      <button type="button" onClick={disabled ? handleCounterIncrement : console.log("нажмите кнопку Enable")} className={disabled ? styles.counterIncrement : styles.toggle}>+</button>
      </div >
    </div>  
  );
}