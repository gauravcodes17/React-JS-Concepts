import React, { useState } from "react";
import ComA from "./ComA";
import Portal from "./Portal";
import ReactDOM from "react-dom";

const MyComponent = () => {
  return ReactDOM.createPortal(
    <Portal />,
    document.getElementById("second-div")
  );
};

const reading = {
  name: "john",
  age: 54,
  city: "london",
  designation: "software developer",
};

const arr1 = [11, 2, 3, 4, 5];
const arr2 = [12, 44, 78];
const finalArr = [...arr1, ...arr2];
console.log(finalArr);

const total = finalArr.reduce((acc, elem) => {
  return acc + elem;
}, 100);
console.log(total);

const final = finalArr.map((elem, i) => {
  return console.log(elem);
});

console.log(reading);
console.log(reading.age);
console.log(reading.city);
console.log(reading.designation);

const PropType = () => {
  const [state, setState] = useState(false);
  const [data, setData] = useState(state);

  const obj1 = {
    profession: "developer",
    location: "banglore",
  };
  const arr1 = [11, 8, 9, 2];

  return (
    <>
      <h1>PropType Checking</h1>
      <ComA name="gaurav" age={21} obj={obj1} arr1={arr1} />
      <br />
      <button
        onClick={() => {
          setState(!state);
          setData(!state);
        }}
      >
        {data ? "hide" : "show"}
      </button>
      {state ? <MyComponent /> : ""}
    </>
  );
};

export default PropType;
