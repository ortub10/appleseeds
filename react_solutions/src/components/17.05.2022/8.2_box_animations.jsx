import React from "react";
import "./style.css";

class Exercise8_2 extends React.Component {
  state = {
    show: false,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ show: true });
    }, 1000);
  };

  componentDidUpdate = () => {
    if (this.state.show) {
      setTimeout(() => this.setState({ show: false }), 3000);
    }
  };
  render() {
    if (this.state.show) {
      return (
        <div>
          <Box name="box1" />
          <Box name="box2" />
          <Box name="box3" />
        </div>
      );
    }
  }
}

export default Exercise8_2;

class Box extends React.Component {
  render() {
    return <div className={`box ${this.props.name}`}></div>;
  }
}
