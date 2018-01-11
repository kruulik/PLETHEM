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
      tabsHeight: null,
      tabs: null,
    });
  }

  updateSize = () => {
    const { tabs } = this.state;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const tabsWidth = tabs.getBoundingClientRect().width;
    const tabsHeight = h - 166;
    this.setState({
      wWidth: w,
      wHeight: h,
      tabsWidth: tabsWidth,
      tabsHeight: tabsHeight,
    });

  }

  componentDidMount () {
    const tabs = document.querySelector(".tab-content-wrapper");
    this.setState({
      tabs,
      tabsWidth: tabs.getBoundingClientRect().width,
      tabsHeight: window.innerHeight - 166
    })
    window.addEventListener("resize", () => {
      let resizeEvent = requestAnimationFrame(this.updateSize)
    });
  }

  componentWillUnmount () {
    cancelAnimationFrame(resizeEvent);
  }

  render() {
    const { windowWidth, windowHeight, tabsWidth, tabsHeight } = this.state;
    console.log(tabsHeight);
    return (
      <Layout style={style.container}>
        <Header />
        <Sidebar />
        <Layout style={style.contentWrapper}>
          <Content style={{ overflow: 'initial', height: '100%'}}>
            <TabContainer tabsWH={{tabsWidth, tabsHeight}} />
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
    height: '100vh',
  },
  contentWrapper: {
    marginLeft: '300px',
    marginTop: '60px',
    height: 'calc(100vh - 60px)',
    // border: '3px solid red'
  }
}
