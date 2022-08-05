import React from "react";
import useCount from "./useCount";

const CountT = () => {
  const [count, inc, dec, rst] = useCount(10, 10);

  return (
    <>
      <h1>two</h1>
      <h2>{count}</h2>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={rst}>Reset</button>
    </>
  );
};

export default CountT;
