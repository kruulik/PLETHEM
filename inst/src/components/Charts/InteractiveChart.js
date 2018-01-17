import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TableActions from 'actions/tableActions';

import { VictoryChart, VictoryAxis, VictoryTheme, VictoryLine, VictoryZoomContainer, VictoryCursorContainer, createContainer, VictoryTooltip, VictoryLabel, Flyout } from 'victory';

import { PlotSelector } from 'components';

class InteractiveChart extends Component {

  constructor(props){
    super(props);
    this.state = ({
      selectedOptions: [],
      filteredData: {}
    })
  }

  handleSelection = ( selectedOptions ) => {
    // debugger
    this.setState({ selectedOptions }, this.filterPlots);
  }

  filterPlots = () => {
    // debugger
    const { datapoints } = this.props;
    const {rows, data} = datapoints;
    let source, filteredData = {};
    this.state.selectedOptions.forEach(d => {
      source = rows[d]
      filteredData[source] = data[source];
    })

    this.setState({
      filteredData
    });
  }

  renderChart = (data) => {
    if (data === {}) {
      // debugger
      return null;
    }

    const ChartContainer = createContainer('zoom', 'cursor');

    let lines = Object.keys(data).map((datum, i) => {
                  let d = data[datum];
                  return (
                    <VictoryLine
                      key={i}
                      interpolation="natural"
                      data={d}
                      style={{
                        data: { stroke: 'darkgray', strokeWidth: 1 }
                      }}
                    />
                  );
                });

    const Null = () => null;

    const Cursor = ({ x, y, active, text }) => {
      let labels = [];
      Object.values(data).forEach((datum, i) => {
        labels.push(
          <text
            key={i}
            x={x + 16}
            y={y-(11 * i)}
            style={styles.textStyle}
            fontSize="9"
            fill="rgba(250,250,250,0.9)"
            textAnchor="start"
          >
            {
              `${datum.find(val => (val.x >= text)).title }: ${datum.find(val => (val.x >= text)).y.toPrecision(3)}`
            }
          </text>
        );
      });

      return (
        <g>
          <path d={`M${x},300 L${x},0`} style={styles.cursor} />
          <rect x={x + 8} y={y-(labels.length * 11 + 2)} height={labels.length * 11 + 10} style={styles.tooltip}
          />
          {labels}
        </g>
      )
    }

    return (
      <VictoryChart
        padding={{ top: 0, bottom: 0, left: 45, right: 20 }}
        style={{

        }}
        // theme={VictoryTheme.material}
        domainPadding={{x: [0, -300], y: [0, 30]}}
        containerComponent={
          <ChartContainer

            cursorLabel={(d) => d.x}
            cursorDimension={"x"}
            cursorLabelComponent={<Cursor />}
            cursorLabelOffset={0}
            cursorComponent={<Null/>}
          />
        }>
        <VictoryAxis
          dependentAxis
          offsetX={45}
          crossAxis={true}
          style={{
            tickLabels: {
              fontSize: '2ev',
              padding: 5
            }
          }}/>
        <VictoryAxis
          offsetY={0}
          offsetX={0}
          crossAxis
          style={{
            tickLabels: {
              fontSize: 11,
              padding: 5
            }
          }}/>
        {lines}
      </VictoryChart>
    )

  }

  render() {
    const { filteredData } = this.state;
    const { datapoints } = this.props;
// debugger
    const { rows } = typeof datapoints !== 'undefined' ? datapoints : {}

    return (
      <div className="plot-wrapper">
        <div className="plot">
          <span>* Scroll to zoom, click and drag to pan.</span>
          {typeof datapoints !== 'undefined' ? this.renderChart(filteredData) : null}
        </div>
        <PlotSelector
          changeSelection={this.handleSelection}
          rows={typeof datapoints !== 'undefined' ? rows : []}
          selectedOptions={this.state.selectedOptions}
        />
      </div>
    )
  }
}

const styles = {
  textStyles: {
    textAnchor: 'middle'
  },
  cursor: {
    strokeWidth: 1,
    stroke: '#FF3D00'
  },
  tooltip: {
    fill: 'rgba(0,0,0,0.5)',
    rx: '4',
    ry: '4',
    width: 120
  }
}


const mapStateToProps = (state) => {

  const datapoints = state.results.sampleData;
  return {
    state,
    datapoints
    // concentrationPlotData: generateConcPlotData(concData)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...TableActions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(InteractiveChart);
