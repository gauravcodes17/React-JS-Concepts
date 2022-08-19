import React from "react";
import HOC from "./HOC";

const C = ({ count, handleIncrement, name }) => {
  return (
    <div
      style={{
        margin: "50px 0",
      }}
    >
      <h1>A Component</h1>
      <button onMouseLeave={handleIncrement}>
        {name} - {count}
      </button>
    </div>
  );
};

export default HOC(C, 3);
