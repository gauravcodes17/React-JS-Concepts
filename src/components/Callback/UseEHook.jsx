import React, { useState, useEffect } from "react";

const UseEHook = () => {
  const [data, setData] = useState(false);

  const handleClick = () => {
    setData(!data);
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("I am Logged....................");
    }, 1000);
  }, [data]);

  return (
    <div
      style={{
        margin: "50px 0",
      }}
    >
      <h1>hello useEffect Hook</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default UseEHook;
