import React from "react";
import { persons } from "./data";
import GetInputAdd from "./inputs/getAdd";
import GetInputUpdate from "./inputs/getUpdte";

class SimpleTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      addTodoInput: "",
      inputUpdate: "",
      selectItem: -1,
    };
    this.addTodo = this.addTodo.bind(this);
    this.handelInputAdd = this.handelInputAdd.bind(this);
    this.handelInputUpdte = this.handelInputUpdte.bind(this);
    this.selectUpdate = this.selectUpdate.bind(this);
    this.uptateTodo = this.uptateTodo.bind(this);
  }

  componentDidMount() {
    const newDate = persons.map((person) => person.name);
    this.setState({ data: newDate });
  }

  addTodo() {
    const newDate = [...this.state.data];
    newDate.push(this.state.addTodoInput);
    this.setState({ data: newDate, addTodoInput: "" });
  }

  removeTodo(index) {
    const newData = [...this.state.data];
    newData.splice(index, 1);
    this.setState({ data: newData });
  }

  selectUpdate(index) {
    const current = this.state.data[index];
    this.setState({ inputUpdate: current, selectItem: index });
  }

  uptateTodo() {
    const newData = [...this.state.data];
    newData[this.state.selectItem] = this.state.inputUpdate;
    this.setState({ data: newData, inputUpdate: "" });
  }

  handelInputAdd(evt) {
    this.setState({ addTodoInput: evt.target.value });
  }

  handelInputUpdte(evt) {
    this.setState({ inputUpdate: evt.target.value });
  }

  render() {
    return (
      <>
        {this.state.inputUpdate === "" ? (
          <GetInputAdd
            addTodoInput={this.state.addTodoInput}
            handelInputAdd={this.handelInputAdd}
            addTodo={this.addTodo}
          />
        ) : (
          <GetInputUpdate
            inputUpdate={this.state.inputUpdate}
            handelInputUpdte={this.handelInputUpdte}
            uptateTodo={this.uptateTodo}
          />
        )}
        {this.state.data.map((name, index) => {
          return (
            <div key={index}>
              <span onClick={() => this.selectUpdate(index)}>{name}</span>
              <button onClick={() => this.removeTodo(index)}>DELETE</button>
            </div>
          );
        })}
      </>
    );
  }
}

export default SimpleTodo;
