import React from "react";
import "./style.css";

class Exercise9_1 extends React.Component {
  state = {
    isLoad: true,
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ isLoad: false });
    }, 4000);
  };
  render() {
    const arrSpinner = [<Spinner1 />, <Spinner2 />, <Spinner3 />];
    const randomSpiner = Math.floor(Math.random() * arrSpinner.length);
    if (this.state.isLoad) {
      return <div>{arrSpinner[randomSpiner]}</div>;
    }
    return <h1 id="headerSpinner">Welcome to website</h1>;
  }
}

export default Exercise9_1;

class Spinner1 extends React.Component {
  render() {
    return <div className="spinner1"></div>;
  }
}
class Spinner2 extends React.Component {
  render() {
    return <div className="spinner1 spinner2"></div>;
  }
}
class Spinner3 extends React.Component {
  render() {
    return (
      <div className="balles">
        <div className="ball up" id="up1"></div>
        <div className="ball up" id="up2"></div>
        <div className="ball up" id="up3"></div>
      </div>
    );
  }
}
