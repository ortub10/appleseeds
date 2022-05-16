import React from "react";
import "./styleBox.css";
import Box4 from "./Box4";

class Box3 extends React.Component {
  render() {
    return (
      <div className="box box3">
        <Box4 />
        <Box4 />
      </div>
    );
  }
}

export default Box3;
