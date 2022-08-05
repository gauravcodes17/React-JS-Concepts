import React, { useEffect } from "react";

const UseDocTitle = (count) => {
  useEffect(() => {
      document.title = `count ${count}`
  }, [count])  

  return (
    <>
      <h1>doc title</h1>
    </>
  );
};

export default UseDocTitle;
