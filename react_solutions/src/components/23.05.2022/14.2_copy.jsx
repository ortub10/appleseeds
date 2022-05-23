import React from "react";

class Exercise14_2 extends React.Component {
  constructor() {
    super();
    this.text = React.createRef();
  }
  onCopy = () => {
    this.text.current.select();
    window.document.execCommand("copy");
  };
  render() {
    return (
      <div>
        <h1>What is the meaning of life?</h1>
        <textarea name="" id="" cols="30" rows="10" ref={this.text}></textarea>
        <button onClick={this.onCopy}>Copy</button>
      </div>
    );
  }
}

export default Exercise14_2;
