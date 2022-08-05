import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "something went wrong",
      };
    default:
      return state;
  }
};

const FetchDataTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_SUCCESS",
        });
      });
  }, []);

  return (
    <>
      <h1>{state.loading ? "loading...................." : state.post.title}</h1>
      <h1>{state.error ? state.error : null}</h1>
    </>
  );
};

export default FetchDataTwo;
