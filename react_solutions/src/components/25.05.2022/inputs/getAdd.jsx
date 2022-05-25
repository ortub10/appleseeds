import React from "react";

class GetInputAdd extends React.Component {
  render() {
    return (
      <>
        <input
          type="text"
          value={this.props.addTodoInput}
          onChange={this.props.handelInputAdd}
        />
        <button
          onClick={this.props.addTodo}
          disabled={this.props.addTodoInput.length ? false : true}
        >
          Add Todo
        </button>
      </>
    );
  }
}

export default GetInputAdd;
