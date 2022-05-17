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

  checkSituation = () => {
    if (this.state.counter > 0) {
      this.setState({ currentClass: "green" });
    } else if (this.state.counter < 0) {
      this.setState({ currentClass: "red" });
    } else {
      this.setState({ currentClass: "black" });
    }
  };
  eventInc = () => {
    if (this.state.counter < 10)
      this.setState(
        (prevState) => {
          return { counter: this.state.counter + 1 };
        },
        () => this.checkSituation()
      );
  };

  eventDec = () => {
    if (this.state.counter > -10)
      this.setState(
        (prevState) => {
          return { counter: this.state.counter - 1 };
        },
        () => this.checkSituation()
      );
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
