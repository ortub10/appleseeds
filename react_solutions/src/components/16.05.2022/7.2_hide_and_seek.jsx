import React from "react";
import "./style.css";

class Exercise7_2 extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: true,
      // currentClass: "show",
    };
  }

  clickEvent = () => {
    this.setState((prevState) => {
      return { isShow: !this.state.isShow };
    });
    // if (this.state.isShow) this.setState({ currentClass: "" });
    // else this.setState({ currentClass: "show" });
  };

  render() {
    return (
      <div className="contain">
        <button onClick={this.clickEvent}>show/hide</button>
        {/* <div className={this.state.currentClass}></div> */}
        {this.state.isShow && <div className="show"></div>}
      </div>
    );
  }
}

export default Exercise7_2;
