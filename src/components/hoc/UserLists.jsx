import React, { useState, useEffect } from "react";

const UserLists = () => {
  const [users, setUsers] = useState([]);
  const [term, setTerm] = useState("");

  const getUsersData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const json = await response.json();
    setUsers(json);
    //console.log(json);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  let responseData = users.map((user) => {
    return (
      <div>
        <ol key={user.id}>
          <li>{user.name}</li>
        </ol>
      </div>
    );
  });

  let filteredUsers = users
    .filter((user) => {
      return user.name.toLowerCase().indexOf(term) >= 0;
    })
    .map((user) => {
      return (
        <div>
          <ol>
            <li key={user.id}>{user.name}</li>
          </ol>
        </div>
      );
    });

  return (
    <>
      <h1>UserLists</h1>
      <input
        type="text"
        onChange={(e) => {
          setTerm(e.target.value);
        }}
        value={term}
      />
      {filteredUsers}
    </>
  );
};

export default UserLists;
