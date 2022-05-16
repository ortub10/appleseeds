import React from "react";
import "./style.css";

class Exercise7_3 extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      currentClass: "black",
    };
  }

  checkSituation = (number) => {
    if (this.state.counter > number) {
      this.setState({ currentClass: "green" });
    } else if (this.state.counter < number) {
      this.setState({ currentClass: "red" });
    } else {
      this.setState({ currentClass: "black" });
    }
  };
  eventInc = () => {
    this.checkSituation(-1);
    if (this.state.counter < 10)
      this.setState({ counter: this.state.counter + 1 });
  };

  eventDec = () => {
    this.checkSituation(1);
    if (this.state.counter > -10)
      this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div className="contain7_3">
        <button onClick={this.eventDec}>Decrement</button>
        <label className={this.state.currentClass}>{this.state.counter}</label>
        <button onClick={this.eventInc}>Increment</button>
      </div>
    );
  }
}

export default Exercise7_3;
