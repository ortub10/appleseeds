import React from "react";

class Exercise8_1 extends React.Component {
  state = {
    favoriteColor: "blue",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "green" });
    }, 1000);
  }
  componentDidUpdate() {
    document.getElementById(
      "userId"
    ).innerText = `The updated favorite color is ${this.state.favoriteColor}`;
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="userId"></div>
      </div>
    );
  }
}

export default Exercise8_1;
