import React, { useState, useMemo } from "react";

const Memorize = () => {
  const [count, setCount] = useState(0);
  const [itemsRate, setItemsRate] = useState(15);

  const boxing = {
    margin: "50px 100px",
  };

  const multiCount = useMemo(() => {
    console.log(count);
    return count * 5;
  }, [count]);

  return (
    <>
      <div style={boxing}>
        <h1>memorize</h1>
        <br />
        <h2>count : {count}</h2>
        <h2>items : {itemsRate}</h2>
        <h2>{multiCount}</h2>
        <button onClick={() => setCount(count + 1)}>update count</button>
        <br />
        <button onClick={() => setItemsRate(itemsRate * 2)}>
          update items
        </button>
      </div>
    </>
  );
};

export default Memorize;
