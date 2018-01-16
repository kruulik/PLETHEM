import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


import { Tabs, Button, Collapse } from 'antd';
const { Panel } = Collapse;
const TabPane = Tabs.TabPane;

import { EditableTable } from 'components';
import { SupplementalTable } from 'components';

import { VictoryChart, VictoryLine, VictoryZoomContainer, VictoryCursorContainer, createContainer, VictoryTooltip, VictoryLabel } from 'victory';

import * as TableActions from 'actions/tableActions';
import { generateConcPlotData } from 'reducers/transpose';



class TabContainer extends Component {

  wrappedRef = (table) => {
    console.log(this[table].wrappedInstance.props.table)
    if (typeof this[table] === 'undefined') {
      return false
    } else {
      return this[table].wrappedInstance
    }
  }


renderChart = (data, selected) => {

  const ChartContainer = createContainer('zoom', 'cursor');
  let lines = Object.keys(data).map((datum, i) => {
                let d = data[datum];
                return (
                  <VictoryLine
                    key={i}
                    interpolation="natural"
                    data={d}
                    style={{
                      data: { stroke: d.color }
                    }}
                  />
                );
              })

  const Null = () => null;
  const Cursor = ({ x, y, active, text }) => {
    let labels = [];
    Object.values(data).forEach((datum, i) => {
      labels.push(
        <text key={i} x={x+18} y={y-(14 * i)} style={{ textAnchor: 'middle', fill: 'black' }}>
          {`${datum.find(val => (val.x >= text)).title }: ${datum.find(val => (val.x >= text)).y.toPrecision(3) }`}
        </text>
      )
    })
    return (
      <g>
        {labels}
        <path d={`M${x},250 L${x},50`} style={{ strokeWidth: 1, stroke: 'deeppink' }} />
      </g>
    )
  }

  return (
    <VictoryChart
      containerComponent={
        <ChartContainer
          cursorLabel={(d) => d.x}
          cursorDimension={"x"}
          cursorLabelComponent={<Cursor />}
          cursorLabelOffset={0}
          cursorComponent={<Null/>}
        />
      }>
      {lines}
    </VictoryChart>
  )

}


  render(){
    const { concentrationPlotData } = this.props;

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

                {concentrationPlotData.Lungs.length > 0 ? this.renderChart(concentrationPlotData) : null}

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
  // Might use this later to fill tabs/tables and pass props
  // const concentrationPlotData = state.results.sampleData
  const concData = state.results.sampleData;
  return {
    state,
    concentrationPlotData: generateConcPlotData(concData)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...TableActions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);
