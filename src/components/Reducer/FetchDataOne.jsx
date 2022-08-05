import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchDataOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});
  const [input, setInput] = useState(1);

  const changeInput = (e) => {
      setInput(e.target.value);
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${input}`)
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError("something went wrong");
      });
  }, [input]);

  return (
    <>
      <input type="text" value={input} onChange={changeInput} />
      <h1>{loading ? "loading...................." : post.title}</h1>
      <h1>{error ? error : null}</h1>
    </>
  );
};

export default FetchDataOne;
