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
      filteredData: {},
      minY: 0.1,
      pHeight: 360,
    })
  }

  updateSize = (plot, other) => {
    // debugger
    const p = plot.getBoundingClientRect();
    const o = other.getBoundingClientRect();
    console.log(plot, other, p.height, o.height)
    this.setState({
      pHeight: p.height - o.height - 40,
    })
  }

  componentDidMount() {
    // const pHeight = document.querySelector('.plot-container').getBoundingClientRect().height;
    // const fHeight = document.querySelector('.plot-filters').getBoundingClientRect().height;

    const plot = document.querySelector('.plot-container')
    const other = document.querySelector('.plot-filters')
    this.updateSize(plot, other);
    window.addEventListener("resize", () => {
      let resizeEvent = requestAnimationFrame(() => this.updateSize(plot, other))
    });

  }

  handleSelection = ( selectedOptions ) => {
    this.setState({ selectedOptions }, this.filterPlots);
  }

  clipData = (data, rows) => {
    const { minY } = this.state;
    let i, d, lowestIndex, clippedData = {};
    const dataArray = Object.values(data);

    let length = dataArray[0].length
    for (i = length - 1; i > 0; i--) {
      d = 0;
      for (d = 0; d < dataArray.length; d++) {
        if ( dataArray[d][i].y >= minY ) {
          lowestIndex = i;
          i = 0;
          break;
        }
      }

    }

    rows.forEach(row => {
      clippedData[row] = data[row].slice(0, lowestIndex);
    });
    return clippedData;
  }

  filterPlots = () => {
    const { datapoints } = this.props;
    const {rows, data} = datapoints;

    const clippedData = this.clipData(data, rows);

    let source, filteredData = {};
    this.state.selectedOptions.forEach(d => {
      source = rows[d]
      filteredData[source] = clippedData[source];
    })

    this.setState({
      filteredData
    });
  }

  renderChart = (data) => {
    if (data === {}) {
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
          <path d={`M${x},280 L${x},10`} style={styles.cursor} />
          <rect x={x + 8} y={y-(labels.length * 11 + 2)} height={labels.length * 11 + 10} style={styles.tooltip}
          />
          {labels}
        </g>
      )
    }
// debugger
    return (
      <VictoryChart
        // height={this.state.pHeight}
        // width={this.state.pWidth}
        // height={100}
        // width={pWidth}

        padding={{ top: 10, bottom: 20, left: 45, right: 20 }}
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
          crossAxis
          style={{
            tickLabels: {
              fontSize: 11,
              padding: 5
            }
          }}/>
        <VictoryAxis
          offsetY={20}
          offsetX={0}
          crossAxis
          padding={{ bottom: 60 }}
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

    const { rows } = typeof datapoints !== 'undefined' ? datapoints : {}

    return (
      <div className="plot-wrapper">
        <div className="plot-container">
          <span>* Scroll to zoom, click and drag to pan.</span>
          <div className="plot">
            {typeof datapoints !== 'undefined' ? this.renderChart(filteredData) : null}
          </div>

          <div className="plot-filters"></div>
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
