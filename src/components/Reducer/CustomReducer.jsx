import React, { useReducer } from "react";

//https://www.figma.com/proto/BVsbGffElXkGqgjslNdgTS/Dazziie-%3A-Interns-Task?node-id1%3A2305=&caling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2305&node-id=1%3A2305

let word = "racecar";

function checkPalindrome(str) {
  let check = str === str.split("").reverse().join("");
  console.log(check);
}

//console.log(word);
checkPalindrome(word);

const initialState = {
  numTwo: 0,
  numFive: 0,
  toggle: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INC_TWO":
      return {
        ...state,
        numTwo: action.payload,
      };
    case "INC_FIVE":
      return {
        ...state,
        numFive: action.payload,
      };
    case "TOGGLE":
      return {
        ...state,
        toggle: !state.toggle,
      };
    default:
      return state;
  }
};

const CustomReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h1>hello reducer here...</h1>
        <h1>{state.numTwo}</h1>
        <button
          onClick={() => {
            dispatch({
              type: "INC_TWO",
              payload: state.numTwo + 2,
            });
          }}
        >
          INCREMENT BY TWO
        </button>
        <br />
        <br />
        <h1>{state.numFive}</h1>
        <button
          onClick={() => {
            dispatch({
              type: "INC_FIVE",
              payload: state.numFive + 5,
            });
          }}
        >
          INCREMENT BY FIVE
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            dispatch({
              type: "TOGGLE",
            });
          }}
        >
          {state.toggle ? "React is Good" : "Angular is Good"}
        </button>
      </div>
    </>
  );
};

export default CustomReducer;
