import React from "react";

class Exercise11_3 extends React.Component {
  state = {
    isfilled: false,
    isDone: false,
    firstName: "",
    lastName: "",
    age: "0-15",
    textarea: "",
  };
  submitForm = (e) => {
    e.preventDefault();
    if (
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.textarea !== ""
    )
      this.setState({ isfilled: true });
    else {
      alert("You must fill all the fields");
    }
  };
  render() {
    if (!this.state.isfilled && !this.state.isDone) {
      return (
        <div>
          <form onSubmit={this.submitForm}>
            <label htmlFor="first">First Name: </label>
            <input
              type="text"
              name="first"
              value={this.state.firstName}
              onChange={(evt) => this.setState({ firstName: evt.target.value })}
            />
            <br />
            <br />
            <label htmlFor="last">Last Name: </label>
            <input
              type="text"
              name="last"
              value={this.state.lastName}
              onChange={(evt) => this.setState({ lastName: evt.target.value })}
            />
            <br />
            <br />
            <label htmlFor="age">Age </label>
            <select
              name="age"
              id="age"
              value={this.state.age}
              onChange={(evt) => this.setState({ age: evt.target.value })}
            >
              <option value="0-15">0-15</option>
              <option value="15-40">15-40</option>
              <option value="over 40">over 40</option>
            </select>
            <br />
            <br />
            <label htmlFor="data">Free Text: </label>
            <textarea
              name="data"
              id="data"
              cols="30"
              rows="2"
              value={this.state.textarea}
              onChange={(evt) => this.setState({ textarea: evt.target.value })}
            ></textarea>
            <br />
            <br />
            <button>Continue</button>
          </form>
        </div>
      );
    } else if (this.state.isfilled && !this.state.isDone) {
      return (
        <div>
          <p>{this.state.firstName}</p>
          <p>{this.state.lastName}</p>
          <p>{this.state.age}</p>
          <p>{this.state.textarea}</p>
          <button onClick={() => this.setState({ isfilled: false })}>
            Back
          </button>
          <button onClick={() => this.setState({ isDone: true })}>
            Send Survey
          </button>
        </div>
      );
    } else {
      return <h1>The form has been submitted </h1>;
    }
  }
}
export default Exercise11_3;
