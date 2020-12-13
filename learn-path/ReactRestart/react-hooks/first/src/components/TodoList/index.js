import { Component } from "react";
import "./index.css";
import { Button, Input, List } from "antd";

export default class TodoList extends Component {
  state = {
    inputValue: "",
    list: [],
  };

  handleChangeValue(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleClick() {
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: "",
      },
      () => {
        localStorage.setItem("todoList", JSON.stringify(this.state.list));
      }
    );
  }
  deleteItem(item) {
    const list = JSON.parse(JSON.stringify(this.state.list));
    list.splice(item, 1);
    this.setState(
      {
        list,
      },
      () => {
        localStorage.setItem("todoList", JSON.stringify(list));
      }
    );
  }

  componentDidMount() {
    const list = localStorage.getItem("todoList");
    if (list) {
      this.setState({
        list: JSON.parse(list),
      });
    }
  }

  render() {
    return (
      <div>
        <div className="list-input">
          <Input
            className="input"
            value={this.state.inputValue}
            allowClear
            onChange={this.handleChangeValue.bind(this)}
          />
          <Button onClick={this.handleClick.bind(this)}>新增</Button>
        </div>
        <List
          className="todo-list"
          dataSource={this.state.list}
          bordered
          renderItem={(item, index) => (
            <div className="list-item">
              <div>{item}</div>
              <i
                className="iconfont icon-guanbi"
                onClick={this.deleteItem.bind(this, index)}
              ></i>
            </div>
          )}
        ></List>
      </div>
    );
  }
}
