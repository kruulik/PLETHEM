import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TableActions from 'actions/tableActions';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class PlotSelector extends Component {

  listItems = () => {

  }

  render () {

    return (
      <div className="plot-selector">
        <Tabs type="card" style={{ height: '100%' }} >
          <TabPane tab="Plot" key="1" className="plot-selector-tab-content" >
            {this.listItems()}
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
