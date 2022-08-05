import React, { forwardRef } from "react";

const ChildInput = (props, ref) => {
  return (
    <>
      <h1>child</h1>
      <input type="text" ref={ref} />
    </>
  );
};

export default forwardRef(ChildInput);
