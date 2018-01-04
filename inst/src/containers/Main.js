import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';

import Sidebar from './Sidebar';
import Header from './Header';

import { TabContainer } from 'components';

import { Layout } from 'antd';
const { Content, Sider } = Layout;

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      windowWidth: window.innerWidth,
      windwHeight: window.innerHeight,
      tabsWidth: null,
      tabs: null,
    });
  }

  updateSize = () => {
    const { tabs } = this.state;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const tabsWidth = tabs.getBoundingClientRect().width;
    this.setState({
      wWidth: w,
      wHeight: h,
      tabsWidth: tabsWidth,
    });
  }

  componentDidMount () {
    const tabs = document.querySelector(".ant-tabs-content");
    this.setState({
      tabs,
      tabsWidth: tabs.getBoundingClientRect().width
    })
    window.addEventListener("resize", () => {
      let resizeEvent = requestAnimationFrame(this.updateSize)
    });
  }

  componentWillUnmount () {
    cancelAnimationFrame(resizeEvent);
  }

  render() {
    const { windowWidth, windowHeight, tabsWidth } = this.state;
    return (
      <Layout style={style.container}>
        <Header />
        <Sidebar />
        <Layout style={style.contentWrapper}>
          <Content style={{ overflow: 'initial'}}>
            <TabContainer maxWidth={tabsWidth} />
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
    paddingTop: '60px',
    height: '100vh'
  }
}
