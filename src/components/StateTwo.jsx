import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "inc15":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const StateTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>useReducer Hook 2</h1>
      <h2>count one : {count.firstCounter}</h2>
      <h2>count two : {count.secondCounter}</h2>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement 1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>

      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        secondCounter Increment 1
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        secondCounter Decrement 1
      </button>
      <button onClick={() => dispatch({ type: "inc15", value: 15 })}>
        lastCounter Increment by 15
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default StateTwo;
