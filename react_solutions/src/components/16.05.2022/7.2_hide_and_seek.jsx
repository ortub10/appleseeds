import React from "react";
import "./style.css";

class Exercise7_2 extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: true,
      currentClass: "show",
    };
  }

  clickEvent = () => {
    this.setState({ isShow: !this.state.isShow });
    if (this.state.isShow) this.setState({ currentClass: "" });
    else this.setState({ currentClass: "show" });
  };

  render() {
    return (
      <div className="contain">
        <button onClick={this.clickEvent}>show/hide</button>
        <div className={this.state.currentClass}></div>
      </div>
    );
  }
}

export default Exercise7_2;
