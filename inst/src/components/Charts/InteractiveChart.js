import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TableActions from 'actions/tableActions';

import { VictoryChart, VictoryLine, VictoryZoomContainer, VictoryCursorContainer, createContainer, VictoryTooltip, VictoryLabel, Flyout } from 'victory';

import { PlotSelector } from 'components';

// import { generateConcPlotData } from 'reducers/transpose';

class InteractiveChart extends Component {

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
          <text
            key={i}
            x={x + 16}
            y={y-(11 * i)}
            style={styles.textStyle}
            fontSize="9"
            fill="rgba(250,250,250,0.9)"
            textAnchor="start"
          >
            {`${datum.find(val => (val.x >= text)).title }: ${datum.find(val => (val.x >= text)).y.toPrecision(3) }`}
          </text>
        )
      })
      return (
        <g>
          <path d={`M${x},250 L${x},50`} style={styles.cursor} />
          <rect x={x + 8} y={y-(labels.length * 11 + 2)} height={labels.length * 11 + 10} style={styles.tooltip}
          />
          {labels}
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

  render() {
    const { datapoints } = this.props;
    return (
      <div className="plot-wrapper">
        <div className="plot">
          <span>* Scroll to zoom, click and drag to pan.</span>
          {datapoints.Lungs.length > 0 ? this.renderChart(datapoints) : null}
        </div>
        {/* <PlotSelector /> */}
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
    stroke: 'deeppink'
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
