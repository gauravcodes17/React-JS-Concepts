import React from "react";

// usememo, usecallback, useref, HOC, useEffect, usereducer, contextAPI

const Button = ({ handleClick, children }) => {
  console.log(`rendering button = ${children}`);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default React.memo(Button);
