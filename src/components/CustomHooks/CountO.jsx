import React from "react";
import useCount from "./useCount";

const CountO = () => {
  const [count, inc, dec, rst] = useCount(0, 2);  

  return (
    <>
      <h1>one</h1>
      <h2>{count}</h2>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={rst}>Reset</button>
    </>
  );
};

export default CountO;
