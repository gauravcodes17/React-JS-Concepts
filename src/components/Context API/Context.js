import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [count2, setCount] = useState(0);

  function counter() {
    setCount(count2 + 1);
  }

  return (
    <AppContext.Provider
      value={{
        count2,
        counter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
