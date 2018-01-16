import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


import { Tabs, Button, Collapse } from 'antd';
const { Panel } = Collapse;
const TabPane = Tabs.TabPane;

import { EditableTable } from 'components';
import { SupplementalTable } from 'components';
import { InteractiveChart } from 'components';

import { VictoryChart, VictoryLine, VictoryZoomContainer, VictoryCursorContainer, createContainer, VictoryTooltip, VictoryLabel } from 'victory';

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
    // TODO: REFACTOR!!!
    // TODO: Charts should be their own components

    const { tabsWH, getDefaultPhysiologicalData, testDefaultPhys } = this.props;

    return (
      <div className="tabs-wrapper">
        <Tabs type="card" style={{ height: '100%' }} >
          <TabPane tab="Organisms" key="1" className="tab-content-wrapper" >
            <EditableTable
              table="organisms"
              getDetails={testDefaultPhys}
              pagination={false}
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
                scrollY={tabsWH.tabsHeight * 0.5 - 35}
                parentTable="organisms"
              />
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
              scrollY={tabsWH.tabsHeight * 0.5 - 40}
              getDetails={() => console.log('Should fetch row details')}
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
            <Collapse
              style={styles.collapse}
              bordered={false}
              defaultActiveKey={'1'}>
              <Panel header="Concentration" key="1">

                <InteractiveChart />

              </Panel>
            </Collapse>
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
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...TableActions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);
