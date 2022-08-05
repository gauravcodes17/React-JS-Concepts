import { useState } from "react";

const useCount = (initialState = 0, value) => {
  const [count, setCount] = useState(initialState);

  const inc = () => {
    setCount(count + value);
  };

  const dec = () => {
    setCount(count - value);
  };

  const rst = () => {
    setCount(0);
  };

  return [count, inc, dec, rst];

};

export default useCount;
