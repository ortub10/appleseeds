import React from "react";
import "./style.css";

class Exercise8_3 extends React.Component {
  state = {
    color: "blue",
    count: 0,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState((prevState) => {
        return { color: "green", count: prevState.count + 1 };
      });
    }, 1000);
  };

  componentDidUpdate = () => {
    setTimeout(() => {
      if (this.state.color === "blue") {
        this.setState((prevState) => {
          return { color: "green", count: prevState.count + 1 };
        });
      } else if (this.state.color === "green") {
        this.setState((prevState) => {
          return { color: "blue", count: prevState.count + 1 };
        });
      }
    }, 1000);
  };
  render() {
    if (this.state.count < 5)
      return <div className={`mainBox ${this.state.color}`}></div>;
    else return <div className={`mainBox circle ${this.state.color}`}></div>;
  }
}

export default Exercise8_3;
