import "./App.css";
import SearchUsers from "./components/example/Users";
import Todos from "./components/hoc/Todos";
import UserLists from "./components/hoc/UserLists";
import PropType from "./components/PropType";
import Memorize from "./components/Memorize";
import Refs from "./components/Refs";
import State from "./components/State";
import StateTwo from "./components/StateTwo";
import ComA from "./components/Reducer/ComA";
import ComB from "./components/Reducer/ComB";
import ComC from "./components/Reducer/ComC";
import React, { useReducer } from "react";
import FetchDataOne from "./components/Reducer/FetchDataOne";
import FetchDataTwo from "./components/Reducer/FetchDataTwo";
import ParentComponent from "./components/Callback/ParentComponent";
import CounterOne from "./components/Memo/CounterOne";
import UseDocTitle from "./components/CustomHooks/UseDocTitle";
import DocOne from "./components/CustomHooks/DocOne";
import DocTwo from "./components/CustomHooks/DocTwo";
import CountO from "./components/CustomHooks/CountO";
import CountT from "./components/CustomHooks/CountT";
import FirstStyle from "./components/Styled Components/FirstStyle";
import ColorChildren from "./ColorChildren";
import ColorParent from "./ColorParent";
//import JsonData from "./JSON/JsonData";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>hello</h1>
      <br />
      <PropType />
      <br />
      <br />
      <hr />
      <br />
      {/*<UserLists />
      <Todos />*/}
      {/*<SearchUsers />*/}
      <br />
      <State />
      <StateTwo />
      <Memorize />
      <Refs />
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <h1>Count - {count}</h1>
        <ComA />
        <ComB />
        <ComC />
      </CountContext.Provider>
      <br />
      <br />
      <br />
      {/*<FetchDataOne />*/}
      <br />
      <br />
      {/*<FetchDataTwo />*/}
      <br />
      <br />
      <hr />
      <ParentComponent />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <CounterOne />
      <br />
      <br />
      <br />
      <DocOne />
      <br />
      <DocTwo />
      <br />
      <br />
      <br />
      <CountO />
      <br />
      <br />
      <CountT />
      <br />
      <br />
      <br />
      <br />
      <h1>Styled Components</h1>
      <br />
      <FirstStyle />
      <br />
      <br />
      <br />
      <br />
      {/*<JsonData />*/}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ColorParent />
      <br />
      <br />
    </>
  );
}

export default App;
