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

  render() {

    const {settings} = this.props;

    return (
      <Sider
        className="app-sidebar"
        width={300}
        style={styles.sidebar}>

        <Collapse
          style={styles.collapse}
          bordered={false}
          defaultActiveKey={[ '1', '2', '3', '4' ]}>

          <Panel header="Compound Data" key="1">
            <SettingsSelect
              reducer="datasets"
              items={options.datasets}
              defaultVal={settings.dataset}
              label='Dataset'
              handleChange={this.props.setDataset}/>
            <SettingsButton label='Import Dataset...'/>
          </Panel>

          <Panel header="Physiology" key="2">
            <SettingsSelect
              handleChange={this.props.setSpecies}
              items={options.species}
              defaultVal={settings.species}
            label='Target Species'/>
            <SettingsCheckBox
              handleChange={this.props.setAgeDep}
              label='Include Age Dependence'
              id='agedepcb'
              checked={settings.ageDep}/>
            <SettingsCheckBox
              handleChange={this.props.setVariability}
              label='Include Variability'
              id='variabilitycb'
              checked={settings.variability}/>
            <SettingsNumericInput
              handleChange={this.props.setPopSize}
              label='Population Size'
              defaultVal={settings.popSize ? settings.popSize : 50}/>
            <SettingsNumericInput
              handleChange={this.props.setPercMale}
              label='Percent Male'
              defaultVal={settings.percMale ? settings.percMale : 50}/>
            <SettingsNumericInput
              handleChange={this.props.setMinAge}
              label='Minimum Age (years)'
              defaultVal={settings.minAge ? settings.minAge : 10}/>
            <SettingsNumericInput
              handleChange={this.props.setMaxAge}
              label='Maximum Age (years)'
              defaultVal={settings.maxAge ? settings.maxAge : 80}/>
          </Panel>

          <Panel header="ADME" key="3">
            <SettingsSelect
              reducer="metParaSource"
              handleChange={this.props.setMetParaSource}
              items={options.metabParameterSource}
              defaultVal={settings.metParaSource}
            label='Metabolic Parameter Source'/>
            <SettingsSelect
              reducer="ivAssay"
              handleChange={this.props.setIVAssay}
              items={options.assayType}
              defaultVal={0}
            label='In Vitro Assay'/>
            <SettingsCheckBox
              reducer="satMet"
              handleChange={this.props.setSatMet}
              label='Use Saturable Metabolism'
              id='satmetabcb'
              checked={true}/>
            <SettingsSelect
              reducer="renalElim"
              handleChange={this.props.setRenalElim}
              items={options.renalElimSource}
              defaultVal={0}
            label='Renal Elimination Source'/>
            <SettingsCheckBox
              reducer="includeehccb"
              handleChange={this.props.setIncludeEhccb}
              label='Include Enterohepatic Cycling'
              id='includeehccb'
              checked={true}/>
          </Panel>

          <Panel header="Simulation" key="4">
            <SettingsNumericInput
              reducer="timestep"
              handleChange={this.props.setTimestep}
              label='Time Step (hours)'
              defaultVal={settings.timestep ? settings.timestep : 0.1}/>
            <SettingsNumericInput
              reducer="startAge"
              handleChange={this.props.setStartAge}
              label='Start Age (years)'
              defaultVal={settings.startAge ? settings.startAge : 25}/>
            <SettingsNumericInput
              reducer="duration"
              handleChange={this.props.setDuration}
              label='Duration (days)'
              defaultVal={settings.duration ? settings.duration : 7}/>
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
  const settings = state.settings
  return {
    settings
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...SettingsActions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
