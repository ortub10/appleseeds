import React from "react";

class Exercise11_2 extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Checkbox
            name="labal1"
            label="I read the term of the app"
            check={false}
          />
          <Checkbox
            name="labal2"
            label="I accept the term of the app"
            check={false}
          />
          <Checkbox
            name="labal3"
            label="I want to get weekly news letter"
            check={true}
          />
          <Checkbox
            name="labal4"
            label="I want to get sales and offers"
            check={true}
          />
        </form>
      </div>
    );
  }
}

export default Exercise11_2;

class Checkbox extends React.Component {
  render() {
    return (
      <div>
        <input
          name={this.props.name}
          type="checkbox"
          defaultChecked={this.props.check}
        />
        <label htmlFor={this.props.name}> {this.props.label}</label>
      </div>
    );
  }
}
