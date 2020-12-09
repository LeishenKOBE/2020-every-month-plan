import React, { Component } from "react";
import { Button } from "antd";

class Contact extends Component {
  state = {
    list: [
      {
        name: "许嵩",
        age: 34,
        id: 1,
      },
      {
        name: "许嵩1",
        age: 34,
        id: 2,
      },
      {
        name: "许嵩2",
        age: 34,
        id: 3,
      },
    ],
  };

  deleteItem(item) {
    const list = this.state.list.filter((i) => i.id !== item.id);
    this.setState({
      list,
    });
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div className="contactFrom">
        {this.state.list.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.age}</div>
              <Button onClick={this.deleteItem.bind(this, item)}>点击</Button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Contact;
