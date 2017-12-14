import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import Header from './Header';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class TabContainer extends Component {

  render(){
    return (
      <Tabs type="card">
        <TabPane tab="Organisms" key="1">
          <div>Tab Contents</div>
        </TabPane>
        <TabPane tab="Exposure Scenarios" key="2">
          <div>Tab Contents</div>
        </TabPane>
        <TabPane tab="Compounds" key="3">
          <div>Tab Contents</div>
        </TabPane>
        <TabPane tab="Reactions" key="4">
          <div>Tab Contents</div>
        </TabPane>
        <TabPane tab="Observations" key="5">
          <div>Tab Contents</div>
        </TabPane>
        <TabPane tab="Simulations" key="6">
          <div>Tab Contents</div>
        </TabPane>
        <TabPane tab="Results" key="7">
          <div>Tab Contents</div>
        </TabPane>
        <TabPane tab="Plots" key="8">
          <div>Tab Contents</div>
        </TabPane>
      </Tabs>
    )
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

const style = {
}

export default connect(mapStateToProps, null)(TabContainer);
