import React, { useRef } from "react";
import ChildInput from "./ChildInput";

const Refs = () => {
  const inputRef = useRef(null);
  console.log(inputRef);

  const valueRef = useRef(null);

  const handleClick = () => {
    console.warn("running");
    inputRef.current.focus();
    inputRef.current.value = "1500";
    inputRef.current.style.color = "#fff";
    inputRef.current.style.backgroundColor = "gray";
    console.log(inputRef.current.value);
  };
  const stylebox = {
    marginBottom: "50px",
  };

  const changeValue = () => {
    valueRef.current.value = 1000;
    valueRef.current.style.color = "pink";
  };

  return (
    <>
      <h1>refs</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click Me</button>
      <br />
      <br />
      <ChildInput ref={valueRef} />
      <button style={stylebox} onClick={changeValue}>
        Update input box
      </button>
    </>
  );
};

export default Refs;
