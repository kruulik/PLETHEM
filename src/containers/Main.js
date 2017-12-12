import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import Header from './Header';

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
            <div>
              Printing from redux store:
              <br/>
              {JSON.stringify(this.props.state)}
            </div>
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
