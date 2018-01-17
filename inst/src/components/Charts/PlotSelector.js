import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TableActions from 'actions/tableActions';

import { Tabs, Table } from 'antd';
const TabPane = Tabs.TabPane;

class PlotSelector extends Component {


  render () {

    const {rows} = this.props;

    const data = rows.map((row, i) => {
      return {
        key: i,
        option: row
      }
    })

    const rowSelection = {
      selectedOptions: this.props.selectedOptions,
      onChange: this.props.changeSelection,
    }

    const columns = [{
      title: 'Select / Deselect All',
      dataIndex: 'option',
    }]

    return (
      <div className="plot-selector">
        <Tabs tabPosition="top" type="line" size="small" style={{ height: '100%' }} >
          <TabPane tab="Sample" key="1" className="plot-selector-tab-content" bordered>
            <Table  showHeader={true} pagination={false} scroll={{y: 380}} size="small" rowSelection={rowSelection} columns={columns} dataSource={data} />
          </TabPane>
          <TabPane tab="Simulations" key="2" className="plot-selector-tab-content" >
          </TabPane>
          <TabPane tab="Observations" key="3" className="plot-selector-tab-content" >
          </TabPane>
        </Tabs>
      </div>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    state,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...TableActions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlotSelector);
