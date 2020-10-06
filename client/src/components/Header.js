import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Layout, Menu } from "antd";

const Header = ({ location }) => (
  <Layout.Header
    style={{
      padding: "0 24px",
      background: 'white'
    }}
  >
    <div
      style={{
        float: "left"
      }}
    >
      <h2
        style={{
          color: "#fff",
          margin: 0,
          marginRight: "1em",
          display: "inline",
          width: 100,
          lineHeight: "30px"
        }}
      >
        Indicators
      </h2>
    </div>
    <Menu
      theme="light"
      mode="horizontal"
      selectedKeys={[location.pathname]}
      style={{
        lineHeight: "64px"
      }}
    >
      <Menu.Item key="/explore">
        <Link to="/explore">Generate</Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to="/">Saved Visualizations</Link>
      </Menu.Item>
    </Menu>
  </Layout.Header>
);

export default withRouter(Header);
