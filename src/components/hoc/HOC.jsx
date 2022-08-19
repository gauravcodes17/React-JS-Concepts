import React, { useState } from "react";

const HOC = (WrappedComponent, num) => {
  function Counter(props) {
    const [count, setCount] = useState(0);

    function handleIncrement() {
      setCount(count + num);
    }

    return (
      <div>
        <WrappedComponent
          count={count}
          handleIncrement={handleIncrement}
          {...props}
        />
      </div>
    );
  }
  return Counter;
};

export default HOC;
