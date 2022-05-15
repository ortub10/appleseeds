import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "./components/styleBox.css";

class App extends React.Component {
  render() {
    return (
      <div className="box1">
        <div className="box2">
          <div className="box3">
            <div className="box4"></div>
            <div className="box4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
