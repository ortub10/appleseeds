import data from "./data";
import React from "react";

class Exercise13_1 extends React.Component {
  allNames = () => {
    return data.map((person) => person.name);
  };
  bornBefore1990 = () => {
    return data.filter((person) => {
      return +person.birthday.substring(person.birthday.length - 4) < 1990;
    });
  };
  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          {this.allNames().map((name, index) => (
            <Name key={index} name={name} />
          ))}
        </div>
        <div style={{ display: "flex" }}>
          {this.bornBefore1990().map((person, index) => (
            <Card key={index} person={person} />
          ))}
        </div>
      </div>
    );
  }
}

export default Exercise13_1;

function Name({ name }) {
  return <p style={{ padding: "1rem" }}>{name}</p>;
}

function Card({ person }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        margin: "2rem",
        textAlign: "center",
      }}
    >
      <h1>{person.name}</h1>
      <h3>{person.birthday}</h3>
      <p>favorite meats foods: {person.favoriteFoods.meats.join(" ,")}</p>
      <p>favorite fish foods: {person.favoriteFoods.meats.join(" ,")}</p>
    </div>
  );
}
