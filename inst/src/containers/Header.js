import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import FileSaver from 'file-saver'

import PropTypes from 'prop-types';

import { Layout, Button, Icon } from 'antd';
const { Header } = Layout;

// import * as ProjectActions from 'actions/projectActions';
import * as TableActions from 'actions/tableActions';

class AppHeader extends Component {

  constructor(props) {
  super(props)

  }

  handleSave = () => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    const json = window.localStorage.state;
    const file = new File( [json], `PLETHEM_${ h}_${ m}_${ s }.json`, { type: "text/plain;charset=utf-8" } );
    FileSaver.saveAs( file );
  }

  selectFile = () => {
    document.getElementById( 'loadprojectfileinput' ).click();
  }

  readFiles = ( input ) => {
    const reader = new FileReader();
    const upload = this.props.uploadProject
    reader.onload = (e) => {
      const project = JSON.parse(reader.result);
      return upload(project)
    }
    reader.readAsText( input.target.files[ 0 ] );
  }

  render() {

    const cpd = {
      AqSolubility : 6000,
      CAS : "107-06-2",
      Compound : "1,2-Dichloroethane",
      Density : 1240,
      F_ehc : 0,
      Km_Liver : 2.5,
      LogP_5p5 : 1.48,
      LogP_7p4 : 1.48,
      MW : 98.96,
      VaporPressure : 10500,
      Vmax_Liver_Total : 450,
      key : "CAS=107-06-2__UID=72ddebbd-b13f-4b34-9296-dd214b74aa75"
    }
    const args = {
      age: 25,
      gender: 0,
      species: 0,
      compounds: [
        {
            odose: 100,
            ivdose: 0,
            mw: 98.96,
            kow: 1.48,
            kowsk: 1.48,
            pvap: 10500.0,
            tgas: 25.0,
            density: 1240.0,
            swat: 6000.0,
            kabs: 1,
            fabs: 1,
            vmax: 450,
            km: 2.5,
            kbil: 0.0
        }
      ]
    }

    return (
      <Header className="app-header">
        <span className="logo">PLETHEM PRO</span>
        <div className="menu"><div className="left-nav">
          <Button type="default" ghost onClick={this.handleSave} icon="download">Save Project</Button>
          <Button type="default" ghost onClick={this.selectFile} icon="upload">Load Project</Button>
        </div>
          <div className="right-nav">
            <Button type="default" ghost icon="caret-right" onClick={() => this.props.runTestScenario(args)}>Start Run</Button>
            <Button type="danger" ghost icon="pause">Stop Run</Button>
          </div>

        </div>

          <input
            type="file"
            className="file"
            id="loadprojectfileinput"
            name="loadprojectfileinput"
            style={{
              display: 'none'
            }}
            onChange={this.readFiles}/>
        </Header> );
  }
}

AppHeader.propTypes = {
  onPress: PropTypes.func
};

const mapStateToProps = ( state ) => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  // return bindActionCreators({...ProjectActions}, dispatch);
  return bindActionCreators({...TableActions}, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps )( AppHeader );
