import React from "react";
import HOC from "./HOC";

const B = ({ count, handleIncrement, name }) => {
  return (
    <div
      style={{
        margin: "50px 0",
      }}
    >
      <h1>A Component</h1>
      <button onMouseOver={handleIncrement}>
        {name} - {count}
      </button>
    </div>
  );
};

export default HOC(B, 5);
