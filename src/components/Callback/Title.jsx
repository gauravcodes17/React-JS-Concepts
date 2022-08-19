import React, { useState, useEffect, useRef } from "react";

const Title = () => {
  const [title, setTitle] = useState(false);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(0);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const heading = title ? "about" : "home";
    document.title = `${heading}`;
  }, [title]);

  //console.log("rendering title");
  //console.log(`hello`);

  return (
    <>
      <h2>useCallback Hook</h2>
      <h1>{timer}</h1>
      <h2>
        <button
          onClick={() => {
            clearInterval(timerRef.current);
          }}
        >
          clear time
        </button>
      </h2>
      <h1>{title ? "about" : "home"}</h1>
      <h1>{title}</h1>
    </>
  );
};

export default React.memo(Title);
