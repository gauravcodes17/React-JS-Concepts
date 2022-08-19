import React from "react";

const cont = {
  background: "#eee",
  width: "800px",
  margin: "50px auto 0",
  padding: "10px",
  border: "3px solid #000",
  display: "flex",
  flexDirection: "row",
  height: "300px",
  flexWrap: "wrap",
  alignItems: "start",
  //flexFlow: "row wrap",
  //justifyContent: "space-evenly",
  //alignItems: "end"
  //alignContent: "space-evenly",
};

const items = {
  color: "#fff",
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "center",
};

function AppTwo() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        /* CSS - Flexbox *\
      </h1>
      <div className="container" style={cont}>
        <div
          className="items item1"
          style={{
            backgroundColor: "orange",
            color: "#fff",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            order: 1,
            flexGrow: 1,
          }}
        >
          One
        </div>
        <div
          className="items item2"
          style={{
            backgroundColor: "lightgreen",
            color: "#fff",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            alignSelf: "center",
            order: -1,
            flexGrow: 1,
          }}
        >
          Two
        </div>
        <div
          className="items item3"
          style={{
            backgroundColor: "purple",
            color: "#fff",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            alignSelf: "end",
            order: -2,
            flexGrow: 1,
          }}
        >
          Three
        </div>
        <div
          className="items item4"
          style={{
            backgroundColor: "pink",
            color: "#fff",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            alignSelf: "stretch",
            order: 0,
            flexGrow: 1,
          }}
        >
          Four
        </div>
      </div>
    </div>
  );
}

export default AppTwo;
