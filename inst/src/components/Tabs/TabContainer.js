import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Tabs, Button } from 'antd';
const TabPane = Tabs.TabPane;

import { EditableTable } from 'components';
import { SupplementalTable } from 'components';

class TabContainer extends Component {

  handleClick = () => {
    this.table.wrappedInstance.handleAdd();
  }

  render(){
    const { tabsWH } = this.props;
    return (
      <div className="tabs-wrapper">
        <Tabs type="card" style={{ height: '100%' }}>
          <TabPane  tab="Organisms" key="1" className="tab-content-wrapper">
            <EditableTable
              table="organisms"
              tabsWH={tabsWH}
              ref={node => (this.table = node)}
              actions={
                <div>
                  <Button
                    ghost
                    type="primary"
                    ref={node => (this.button = node)}
                    className="editable-table-btn"
                    onClick={() => this.handleClick()}
                  >Add Item</Button>
                  {/* <Button
                    ghost
                    type="danger" disabled={this.refs.table.selectedRowKeys.length === 0 ? true : false}
                    className="editable-table-btn"
                    onClick={() => this.refs.table.handleRemove()}
                  >Remove Selection</Button> */}
                </div>
              }
            />
            <div className="supplemental-data-wrapper">
              <SupplementalTable parentTable="organisms" tabsWH={tabsWH} />
              <div className="plot">
                <div>plot goes here</div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Exposure Scenarios" key="2">
            <EditableTable table="exposure" ref={node => (this.table = node)} actions={
              <div>
                <Button
                  ghost
                  type="primary"
                  ref={node => (this.button = node)}
                  className="editable-table-btn"
                  onClick={() => this.handleClick()}
                >Add Item</Button>
                {/* <Button
                  ghost
                  type="danger" disabled={this.refs.table.selectedRowKeys.length === 0 ? true : false}
                  className="editable-table-btn"
                  onClick={() => this.refs.table.handleRemove()}
                >Remove Selection</Button> */}
              </div>
            }/>
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



const tableOptions = (table) => {

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
