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
            <EditableTable
              columns={[{
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
              }, {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
              }, {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
              }]}
              dataSource={[{
                key: '1',
                name: 'Mike',
                age: 32,
                address: '10 Downing Street'
              }, {
                key: '2',
                name: 'John',
                age: 42,
                address: '10 Downing Street'
              }]}
            />
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
