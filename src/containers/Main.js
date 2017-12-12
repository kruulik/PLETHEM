import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';

import { Layout } from 'antd';
const { Content, Sider } = Layout;


class Main extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Sidebar />
        <Content style={{ height: '100%'}}>
          <div style={{minHeight: '100vh'}}>

          </div>
        </Content>
      </Layout>
    );
  }
}

export default Main;
