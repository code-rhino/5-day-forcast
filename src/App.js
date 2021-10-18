import React, { Component } from "react";
import "./style/App.css";
import Week from "./components/Week";
import "bootstrap/dist/css/bootstrap.min.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Week />
      </div>
    );
  }
}

export default App;
