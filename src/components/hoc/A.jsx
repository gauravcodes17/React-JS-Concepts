import React from "react";
import HOC from "./HOC";

const A = ({ count, handleIncrement, name }) => {
  return (
    <div
      style={{
        margin: "50px 0",
      }}
    >
      <h1>A Component</h1>
      <button onClick={handleIncrement}>
        {name} - {count}
      </button>
    </div>
  );
};

export default HOC(A, 10);
