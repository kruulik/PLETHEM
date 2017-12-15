import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import Header from './Header';

import { TabContainer } from 'components';

import { Layout } from 'antd';
const { Content, Sider } = Layout;

class Main extends Component {

  render() {
    return (
      <Layout style={style.container}>
        <Header />
        <Sidebar />
        <Layout style={style.contentWrapper}>
          <Content style={{ height: '100%', overflow: 'initial'}}>
            <TabContainer />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, null)(Main);

const style = {
  container: {
  },
  contentWrapper: {
    marginLeft: '300px',
    marginTop: '60px'
  }
}
