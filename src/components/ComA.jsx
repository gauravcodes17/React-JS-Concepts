import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ComA = ({ name, age, obj, name2, arr1, profession, city }) => {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(count);

  useEffect(() => {
    document.title = `Home page`;
    setTimeout(() => {
      console.log(`quantity ${count} - total price ${price}`);
    }, 1);
  }, [count]);

  const inc = () => {
    setCount(count + 1);
    setPrice((count + 1) * 35);
  };

  return (
    <>
      <h1>
        Hello {name} my age is {age}
      </h1>
      <p>
        Profession : {obj.profession} Location : {obj.location}
      </p>
      <h4>default prop : {name2}</h4>
      <button
        onClick={() => {
          setNum((prevNum) => prevNum + 1);
          setNum((prevNum) => prevNum + 1);
        }}
      >
        Click Me
      </button>
      <br />
      <br />
      {num}
      <br />
      {arr1}
      <br />
      <h2>Total Items: {count}</h2>
      <h2>Total Price: {price}</h2>
      <button onClick={inc}>increment</button>
      <br />
      <h2>
        {profession} from {city}
      </h2>
    </>
  );
};

ComA.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  obj: PropTypes.object,
  arr1: PropTypes.array,
  location: PropTypes.string,
};
ComA.defaultProps = {
  name2: "Starnger",
  profession: "Backend Developer",
  city: "banglore",
};

export default ComA;
