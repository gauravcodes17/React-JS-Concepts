{/*import React, { useState, useEffect } from "react";

const Hoc = (WrappedComponent, entity) => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");

  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${entity}`
    );
    const json = await response.json();
    setData(json);
  };
  useEffect(() => {
    fetchData();
  }, []);

  let filteredData = data.slice(0, 10).filter((d) => {
    if (entity === "users") {
      const { name } = d;
      return name.toLowerCase().indexOf(term) >= 0;
    }
    if (entity === "todos") {
      const { title } = d;
      return title.toLowerCase().indexOf(term) >= 0;
    }
  });

  return (
    <>
      <div>
        <h2>{entity}</h2>
        <input
          type="text"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          value={term}
        />
        <WrappedComponent data={filteredData}></WrappedComponent>
      </div>
    </>
  );
};

export default Hoc;*/}
