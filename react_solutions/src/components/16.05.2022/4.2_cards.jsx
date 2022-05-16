import React from "react";
import Button from "./botton";
import haifa from "./images/haifa.jpg";
import jerusalem from "./images/jerusalem.jpg";
import telAvaiv from "./images/tel-aviv.jpg";
class Exercise4_2 extends React.Component {
  render() {
    return (
      <div>
        <Card image={haifa} title="Haifa" description="Beautifull city" />
        <Card
          image={jerusalem}
          title="jerusalem"
          description="Important city"
        />
        <Card image={telAvaiv} title="Tel Aviv" description="Funny city" />
      </div>
    );
  }
}

const Card = (props) => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "fit-content",
        border: "1px solid black",
        marginBottom: "1rem",
      }}
    >
      <img src={props.image} alt="" width={"200px"} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <Button text="SHAPE" />
      <Button text="EXPLORE" />
    </div>
  );
};

export default Exercise4_2;
