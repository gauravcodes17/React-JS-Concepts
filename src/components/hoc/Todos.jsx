import React, { useState, useEffect } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [term, setTerm] = useState("");

  const getTodos = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const json = await response.json();
    setTodos(json);
    //console.log(json);
  };

  useEffect(() => {
    getTodos();
  }, []);

  let responseTodos = todos.map((todo) => {
    return (
      <div>
        <ol key={todo.id}>
          <li>{todo.title}</li>
        </ol>
      </div>
    );
  });

  let filteredTodos = todos
    .slice(0, 10)
    .filter((todo) => {
      return todo.title.toLowerCase().indexOf(term) >= 0;
    })
    .map((todo) => {
      return (
        <div>
          <ol>
            <li key={todo.id}>{todo.title}</li>
          </ol>
        </div>
      );
    });

  return (
    <>
      <h1>Todos</h1>
      <input
        type="text"
        onChange={(e) => {
          setTerm(e.target.value);
        }}
        value={term}
      />
      {filteredTodos}
    </>
  );
};

export default Todos;
