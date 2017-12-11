import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';

import { Header } from 'components';
import { Sidebar } from 'components';

import { Layout } from 'antd';
const { Content, Sider } = Layout;


class MainContainer extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Sidebar />
        <Content style={{ height: '100%'}}>

          <div style={{minHeight: '100vh'}}></div>
        </Content>
      </Layout>
    );
  }
}

export default MainContainer;
