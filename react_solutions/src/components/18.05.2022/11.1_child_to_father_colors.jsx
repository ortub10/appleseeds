import React from "react";
import "./style.css";

class Exercise11_1 extends React.Component {
  state = { color: "" };

  colorToShow = (text) => {
    this.setState({ color: text });
  };

  render() {
    const colors = ["blue", "red", "yellow"];

    return (
      <div>
        <div className="contain11_1">
          {colors.map((color) => {
            return (
              <CustomButton
                key={color.toString()}
                onClick={this.colorToShow}
                currentClass={color}
                name={color}
              />
            );
          })}
        </div>
        <h1>The color selected is: {this.state.color}</h1>
      </div>
    );
  }
}

export default Exercise11_1;

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
  }
  colorToShow = (evt) => {
    this.props.onClick(evt.target.innerText);
  };
  state = {};
  render() {
    return (
      <button onClick={this.colorToShow} className={this.props.currentClass}>
        {this.props.name}
      </button>
    );
  }
}
