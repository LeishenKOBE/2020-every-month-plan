import React, { Component } from "react";
import { Button } from "antd";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = (e) => {
    console.log(e);
  };

  _handleMouse_handleMouseMove = (e) => {
    console.log(window.getSelection());
  };
  render() {
    return (
      <div
        onClick={this.handleClick}
        onMouseUp={this._handleMouse_handleMouseMove}
      >
        hello {this.props.name}
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </div>
    );
  }
}
export default Header;
