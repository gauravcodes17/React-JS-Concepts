import React, { useState } from "react";

const ColorChildren = ({ setColorData }) => {
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setColor(value);
    setColorData(value);
  };

  return (
    <div>
      <h1>Children</h1>
      Enter Color Name :{" "}
      <input type="text" onChange={handleChange} value={color} />
    </div>
  );
};

export default ColorChildren;
