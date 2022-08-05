import React, { useState, useMemo } from "react";

let minor = 55 - 36 - 10;
console.log(minor);

const CounterOne = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  /*const isEven = () => {
    console.log(".....................");
    let i = 0;
    while (i < 1000000000) i++;
    return counterOne % 2 === 0;
  }*/

  return (
    <>
      <h1>memo</h1>
      <button onClick={incrementOne}>Count One - {counterOne}</button>
      &nbsp; &nbsp; <span>{isEven ? "even" : "odd"}</span>
      <br />
      <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
    </>
  );
};

export default CounterOne;
