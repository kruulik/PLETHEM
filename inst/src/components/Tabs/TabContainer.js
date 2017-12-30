import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import { EditableTable } from 'components';


class TabContainer extends Component {

  render(){

    return (
      <div className="tabs-wrapper">
        <Tabs type="card" >
          <TabPane tab="Organisms" key="1">
            <EditableTable table="organisms"/>
          </TabPane>
          <TabPane tab="Exposure Scenarios" key="2">
            <EditableTable table="exposure" />
          </TabPane>
          <TabPane tab="Compounds" key="3">
            <EditableTable table="compounds"/>
          </TabPane>
          <TabPane tab="Reactions" key="4">
            <EditableTable table="reactions" />
          </TabPane>
          <TabPane tab="Observations" key="5">
            <div>Tab Contents</div>
          </TabPane>
          <TabPane tab="Simulations" key="6">
            <EditableTable table="simulations" />
          </TabPane>
          <TabPane tab="Results" key="7">
            <div>Tab Contents</div>
          </TabPane>
          <TabPane tab="Plots" key="8">
            <div>Tab Contents</div>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  // Might use this later to fill tabs/tables and pass props
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
