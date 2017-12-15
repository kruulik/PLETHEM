import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import { EditableTable } from 'components';


import tableColumns from 'constants/tableColumns';


class TabContainer extends Component {

  render(){

  const columns = tableColumns

    return (
      <div className="tabs-wrapper">
        <Tabs type="card" >
          <TabPane tab="Organisms" key="1">
            <EditableTable dataSource={[]} columns={columns.organisms}/>
          </TabPane>
          <TabPane tab="Exposure Scenarios" key="2">
            <EditableTable dataSource={[]} columns={columns.exposure}/>
          </TabPane>
          <TabPane tab="Compounds" key="3">
            <EditableTable dataSource={[]} columns={columns.compounds}/>
          </TabPane>
          <TabPane tab="Reactions" key="4">
            <EditableTable dataSource={[]} columns={columns.reactions}/>
          </TabPane>
          <TabPane tab="Observations" key="5">
            <div>Tab Contents</div>
          </TabPane>
          <TabPane tab="Simulations" key="6">
            <EditableTable dataSource={[]} columns={columns.simulations}/>
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
