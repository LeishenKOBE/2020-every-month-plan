import { Component } from "react";
import Zhihu from "../Zhihu/index";
import "./index.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Zhihu></Zhihu>
      </div>
    );
  }
}
