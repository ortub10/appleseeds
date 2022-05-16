import React from "react";
import "./styleBox.css";
import Box3 from "./Box3";

class Box2 extends React.Component {
  render() {
    return (
      <div className=" box box2">
        <Box3 />
      </div>
    );
  }
}

export default Box2;
