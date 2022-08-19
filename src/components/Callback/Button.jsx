import React from "react";

// React JS...
// usememo, usecallback, useref, HOC, useEffect, usereducer, contextAPI
// usecontext

const Button = ({ handleClick, children }) => {
  console.log(`rendering button = ${children}`);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default React.memo(Button);
