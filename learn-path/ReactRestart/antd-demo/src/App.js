import React, { PureComponent } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import "./App.less";
import Home from "./views/Home"

class App extends PureComponent {
  constructor() {
    super();
    this.state = { name: "许嵩" };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/aaa" exact component={Home}>主页</Link>
        </div>
      </Router>
    );
  }
}

export default App;
