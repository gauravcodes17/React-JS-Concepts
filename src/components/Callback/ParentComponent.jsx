import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const dark = {
  backgroundColor: "#000",
  color: "#fff",
};
const light = {
  backgroundColor: "#fff",
  color: "#000",
};

const ParentComponent = () => {
  const [isToggle, setisToggle] = useState(false);
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const darkLightMode = () => {
    setisToggle(!isToggle);
  };

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <>
      <div style={isToggle ? dark : light}>
        <Count text="Age" count={age} />
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text="Salary" count={salary} />
        <Button handleClick={incrementSalary}>Increment Salary</Button>
        <button
          onClick={darkLightMode}
          style={{ cursor: "pointer", backgroundColor: "red", color: "#fff" }}
        >
          Switch to {isToggle ? "light mode ⚪" : "dark mode ⚫"}
        </button>
      </div>
    </>
  );
};

export default ParentComponent;
