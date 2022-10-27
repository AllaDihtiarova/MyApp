import { useState, useEffect } from 'react';

export const Counters = () => {
  
  const [counterA, setCounterA] = useState(JSON.parse(window.localStorage.getItem("counterA")) ?? 0);
  const [counterB, setCounterB] = useState(JSON.parse(window.localStorage.getItem("counterB")) ?? 0);

  const handleCounterAIncrement = () => {
    setCounterA(state => state + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(state => state + 1);
  };

  useEffect(() => {
    window.localStorage.setItem("counterA", JSON.stringify(counterA))
  }, [counterA]);

  useEffect(() => {
   window.localStorage.setItem("counterB", JSON.stringify(counterB))
  }, [counterB])
 
  return (
    <>
      <button
        type="button"
        onClick={handleCounterAIncrement}
      >
        Кликнули counterA {counterA} раз
      </button>

      <button
        type="button"
        onClick={handleCounterBIncrement}
      >
        Кликнули counterB {counterB} раз
      </button>
    </>
  );
}
