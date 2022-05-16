import React from "react";
class Button extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <button>{this.props.text}</button>;
  }
}

// const Button = (props) => {
//   return <button>{props.text}</button>;
// };

export default Button;
