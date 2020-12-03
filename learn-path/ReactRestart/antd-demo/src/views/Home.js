import React, { PureComponent } from "react";
import { Button } from "antd";

class Home extends PureComponent {
  componentDidMount() {}
  render() {
    return (
      <div>
        <p>Hello world</p>
        <Button type="primary">点击</Button>
      </div>
    );
  }
}

export default Home;
