import React from "react";

class Exercise14_1 extends React.Component {
  constructor() {
    super();
    this.text = React.createRef();
  }
  componentDidMount = () => {
    this.text.current.focus();
  };
  render() {
    return <input type="text" ref={this.text} />;
  }
}

export default Exercise14_1;
