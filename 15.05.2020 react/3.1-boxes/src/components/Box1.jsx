import React from "react";
import "./styleBox.css";
import Box2 from "./Box2";

class Box1 extends React.Component {
  render() {
    return (
      <div className="box box1">
        <Box2 />
      </div>
    );
  }
}

export default Box1;
