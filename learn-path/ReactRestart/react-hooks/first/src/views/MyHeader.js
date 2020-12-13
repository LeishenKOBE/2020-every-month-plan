import React from "react";
import "./myHeader.css";
import { Layout } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

const MyHeader = () => {
  return (
    <div>
      <Header className="my-header">
        <Link to="/" className="route-list-item">
          <div className="title">刘看山</div>
        </Link>
        <ul className="route-list">
          <li>
            <Link to="/" className="route-list-item">
              主页
            </Link>
          </li>
          <li>
            <Link to="/list" className="route-list-item">
              待办
            </Link>
          </li>
        </ul>
      </Header>
    </div>
  );
};
export default MyHeader;
