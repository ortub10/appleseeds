import React from "react";

class Exercise7_1 extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  clickEvent = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>Increment</button>
        <p style={{ display: "inline", marginLeft: "3rem" }}>
          {this.state.counter}
        </p>
      </div>
    );
  }
}

export default Exercise7_1;
