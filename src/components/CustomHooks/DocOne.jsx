import React, { useState } from "react";
import UseDocTitle from "./UseDocTitle";

const DocOne = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  UseDocTitle(count);

  return (
    <>
      <h1>doc One</h1>
      <button onClick={increment}>count - {count}</button>
    </>
  );
};

export default DocOne;
