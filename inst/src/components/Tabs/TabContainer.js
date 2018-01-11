import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


import { Tabs, Button } from 'antd';
const TabPane = Tabs.TabPane;

import { EditableTable } from 'components';
import { SupplementalTable } from 'components';

import * as TableActions from 'actions/tableActions';


class TabContainer extends Component {

  wrappedRef = (table) => {
    console.log(this[table].wrappedInstance.props.table)
    if (typeof this[table] === 'undefined') {
      return false
    } else {
      return this[table].wrappedInstance
    }
  }


  render(){

    // NOTE: For each etitable table, pass the selector or action+reducer that should fire when a row is clicked. This avoids needing conditional logic within the EditableTable component.

    const { tabsWH, getDefaultPhysiologicalData, testDefaultPhys } = this.props;
    // console.log(tabsWH)

    // const container = document.querySelector('.ant-tabs-content');
    // let scrollY = 701;
    // if (container){
    //   scrollY = container.getBoundingClientRect().height - 40;
    //   debugger
    // }
    // console.log(scrollY)

    return (
      <div className="tabs-wrapper">
        <Tabs type="card" style={{ height: '100%' }} onChange={this.tabChanged}>
          <TabPane tab="Organisms" key="1" className="tab-content-wrapper" style={styles.tabContent}>
            <EditableTable
              table="organisms"
              getDetails={testDefaultPhys}
              pagination={false}
              tabsWH={tabsWH}
              scrollY={tabsWH.tabsHeight * 0.5 - 40}
              ref={node => (this.organisms = node)}
              rowDefaults={{
                organismName: '–',
                species: 'Rat',
                gender: 'Female',
                age: '25'
              }}
              actions={
                <div>
                  <Button
                    ghost
                    type="primary"
                    className="editable-table-btn"
                    onClick={() => this.wrappedRef('organisms').handleAdd() }
                  >Add Organism</Button>
                </div>
              }
            />
            <div className="supplemental-data-wrapper">
              <SupplementalTable
                // scrollY={maxHeight * 0.5}
                parentTable="organisms"
                tabsWH={tabsWH} />
              <div className="plot">
                <div>plot goes here</div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Exposure Scenarios" key="2">
            <EditableTable
              pagination={false}
              table="exposure"
              ref={node => (this.exposure = node)}
              actions={
                <div>
                  <Button
                    ghost
                    type="primary"
                    className="editable-table-btn"
                    onClick={() => this.wrappedRef('exposure').handleAdd()}
                  >Add Scenario</Button>
                </div>
              }/>
            <div className="supplemental-data-wrapper">
              <SupplementalTable
                parentTable="exposure"
                tabsWH={tabsWH}
              />
            </div>
          </TabPane>
          <TabPane tab="Compounds" key="3">
            <EditableTable
              table="compounds"
              pagination={true}
              ref={node => (this.compounds = node)}
              actions={
                <div>
                  <Button
                    ghost
                    type="primary"
                    className="editable-table-btn"
                    onClick={() => this.wrappedRef('compounds').handleAdd()}
                  >Add Single Compound</Button>
                  <Button
                    ghost
                    type="primary"
                    className="editable-table-btn"
                    onClick={() => this.wrappedRef('compounds').props.requestCompounds()}
                  >Get All Compounds</Button>

                </div>
              }/>
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

const styles = {
  tabContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
}


const mapStateToProps = (state) => {
  // Might use this later to fill tabs/tables and pass props
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...TableActions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);
