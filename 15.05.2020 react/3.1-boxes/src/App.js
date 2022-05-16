import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "./components/styleBox.css";
import Box1 from "./components/Box1";

class App extends React.Component {
  render() {
    return (
      <div className="box1">
        <Box1 />
      </div>
    );
  }
}

export default App;
