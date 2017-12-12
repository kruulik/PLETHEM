import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import PropTypes from 'prop-types';

import { Layout, Collapse } from 'antd';
const { Sider } = Layout;
const { Panel } = Collapse;

import { SettingsSelect } from 'components';
import { SettingsButton } from 'components';
import { SettingsCheckBox } from 'components';
import { SettingsNumericInput } from 'components';

import * as SettingsActions from 'actions/settingsActions';

const options = {
  datasets: ['Default HTTK Dataset', 'Other Dataset'],
  species: [
    "Human", "Mouse", "Rat", "Dog"
  ],
  metabParameterSource: [
    "User-specified", "IVIVE"
  ],
  assayType: [
    "Human Liver Microsomes", "Hepatocytes", "S9 Fraction", "Individual Enzymes"
  ],
  metabType: [
    "Linear", "Saturable"
  ],
  metabParameterSource: [
    "User-specified", "IVIVE"
  ],
  renalElimSource: [ "User-specified", "Calculated" ]
}

class Sidebar extends Component {

  constructor(props){
    super(props);
  }

  // handleChange(value){
  //   debugger
  //   switch(this.reducer){
  //     case "datasets":
  //     case "species":
  //     case "ageDep":
  //     case "variability":
  //     case "popSize":
  //     case "perMale":
  //     case "minAge":
  //     case "maxAge":
  //     case "adme":
  //     case "ivAssay":
  //     case "satMet":
  //     case "renalElim":
  //     case "includeehccb":
  //     case "timeStep":
  //     case "startAge":
  //     case "duration":
  //     default:
  //     console.log(this.reducer, value);
  //     break;
  //   }
  // }

  render() {
    return ( <Sider className="app-sidebar" width={300} style={styles.sidebar}>
      <Collapse style={styles.collapse} bordered={false} defaultActiveKey={[ '1', '2', '3', '4' ]}>

        <Panel header="Compound Data" key="1">
          <SettingsSelect
            reducer="datasets"
            items={options.datasets}
            selectedIdx={0}
            label='Dataset'
            handleChange={this.props.setDataset}/>
          <SettingsButton label='Import Dataset...'/>
        </Panel>

        <Panel header="Physiology" key="2">
          <SettingsSelect
            handleChange={this.props.setDataset}
            reducer="species"
            items={options.species}
            selectedIdx={0}
          label='Target Species'/>
          <SettingsCheckBox
            handleChange={this.props.setDataset}
            reducer="ageDep"
            label='Include Age Dependence'
            id='agedepcb'
            checked={true}/>
          <SettingsCheckBox
            handleChange={this.props.setDataset}
            reducer="variability"
            label='Include Variability'
            id='variabilitycb'
            checked={true}/>
          <SettingsNumericInput
            handleChange={this.props.setDataset}
            reducer="popSize"
            label='Population Size'
            defaultVal={50}/>
          <SettingsNumericInput
            handleChange={this.props.setDataset}
            reducer="perMale"
            label='Percent Male'
            defaultVal={50}/>
          <SettingsNumericInput
            handleChange={this.props.setDataset}
            reducer="minAge"
            label='Minimum Age (years)'
            defaultVal={10}/>
          <SettingsNumericInput
            handleChange={this.props.setDataset}
            reducer="maxAge"
            label='Maximum Age (years)'
            defaultVal={80}/>
        </Panel>

        <Panel header="ADME" key="3">
          <SettingsSelect
            reducer="adme"
            handleChange={this.handleChange}
            items={options.metabParameterSource}
            selectedIdx={1}
          label='Metabolic Parameter Source'/>
          <SettingsSelect
            reducer="ivAssay"
            handleChange={this.handleChange}
            items={options.assayType}
            selectedIdx={0}
          label='In Vitro Assay'/>
          <SettingsCheckBox
            reducer="satMet"
            handleChange={this.handleChange}
            label='Use Saturable Metabolism'
            id='satmetabcb'
            checked={true}/>
          <SettingsSelect
            reducer="renalElim"
            handleChange={this.handleChange}
            items={options.renalElimSource}
            selectedIdx={0}
          label='Renal Elimination Source'/>
          <SettingsCheckBox
            reducer="includeehccb"
            handleChange={this.handleChange}
            label='Include Enterohepatic Cycling'
            id='includeehccb'
            checked={true}/>
        </Panel>

        <Panel header="Simulation" key="4">
          <SettingsNumericInput
            reducer="timestep"
            handleChange={this.handleChange}
            label='Time Step (hours)'
            defaultVal={0.1}/>
          <SettingsNumericInput
            reducer="startAge"
            handleChange={this.handleChange}
            label='Start Age (years)'
            defaultVal={25}/>
          <SettingsNumericInput
            reducer="duration"
            handleChange={this.handleChange}
            label='Duration (days)'
            defaultVal={7}/>
        </Panel>

      </Collapse>
    </Sider> );
  }
}

Sidebar.propTypes = {
  onPress: PropTypes.func
};
const styles = {
  collapse: {
    width: '100%',
    backgroundColor: '#eee',
    borderStyle: 'none'
  },
  sidebar: {
    overflow: 'auto',
    height: 'calc(100vh - 60px)',
    position: 'fixed',
    left: 0,
    top: '60px',
    padding: '8px'
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...SettingsActions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
