import React, { useState } from "react";
import ColorChildren from "./ColorChildren";

let arr = [
  "a",
  "f",
  "g",
  "l",
  "u",
  "r",
  "a",
  "r",
  "l",
  "w",
  "w",
  "b",
  "x",
  "x",
  "f",
  "f",
  "a",
];
console.log(arr);
console.log(arr.length);

function findDuplicacy(arr) {
  let obj = {};
  arr.forEach((val) => {
    if (!obj[val]) {
      obj[val] = 1;
    } else {
      obj[val] += 1;
    }
  });

  return obj;
}

const finalResult = findDuplicacy(arr);
console.log(finalResult);

let num = [4, 5, 9, 7, -8, -7, 2, 1, 4, 6, -3, -8];
console.log(num);

num.forEach((val) => {
  if (val < 0) {
    console.log(val + " is negative");
  } else {
    console.log(val + " is positive");
  }
});

let odd = [
  1, 5, 44, 87, 23, 56, 89, 84, 10, 3, 4, 9, 100, 109, 78, 62, 23, 6, 78, 44,
  22, 90, 91,
];

odd.filter((val) => {
  let result = val % 2 !== 0;
  let check = result ? "odd" : "even";
  console.log(result + " " + val + " is " + check);
});

// convert into object...

function makeObj(arr) {
  let ob = {};
  arr.forEach((val, i) => {
    ob[i] = val;
  });

  return ob;
}

const fr = makeObj(odd);
console.log(fr);
console.log(odd.length);

/* odd.forEach((val) => {
  let result = val % 2 !== 0;
  console.log(result);
}); */

const ColorParent = () => {
  const [colorData, setColorData] = useState("green");

  return (
    <div>
      <h1>Parent</h1>
      <div
        style={{
          width: "250px",
          height: "250px",
          backgroundColor: `${colorData}`,
        }}
      >
        hi
      </div>
      <ColorChildren setColorData={setColorData} />
    </div>
  );
};

export default ColorParent;
