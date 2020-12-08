import React, { Component } from "react";

class Contact extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <div className="contactFrom">
        <div>Name: {this.props.name}</div>
        <div>Age: {this.props.age}</div>
        <div>Sex: {this.props.sex}</div>
      </div>
    );
  }
}

export default Contact;
