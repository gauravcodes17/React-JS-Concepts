import React, { useContext } from "react";
import { CountContext } from "../../App";

const ComD = () => {
  const countContext = useContext(CountContext);

  return (
    <>
      <div>
        ComD - {countContext.countState}
        <button
          onClick={() => countContext.countDispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          onClick={() => countContext.countDispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button onClick={() => countContext.countDispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </>
  );
};

export default ComD;
