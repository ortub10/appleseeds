import React from "react";

class GetInputUpdate extends React.Component {
  render() {
    return (
      <>
        <input
          type="text"
          value={this.props.inputUpdate}
          onChange={this.props.handelInputUpdte}
        />
        <button onClick={this.props.uptateTodo}>Update Todo</button>
      </>
    );
  }
}

export default GetInputUpdate;
