import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import PropTypes from 'prop-types';

import { Layout, Collapse, Button } from 'antd';
const { Sider } = Layout;
const { Panel } = Collapse;

import { SettingsSelect } from 'components';
import { SettingsButton } from 'components';
import { SettingsCheckBox } from 'components';
import { SettingsNumericInput } from 'components';

import * as SettingsActions from 'actions/settingsActions';

const options = {
  analysisTypes: ['Default HTTK Dataset', 'Other Dataset'],
  species: [
    "Human", "Mouse", "Rat", "Dog"
  ],
  pcMethods: [
    "QSAR", "Tissue Model", "User Specified"
  ],
  oralAbsMethods: [
    "First Order", "Multicompartment Transit"
  ],
  metabParameterSource: [
    "User-specified", "IVIVE"
  ],
  assayType: [
    "Human Liver Microsomes", "Hepatocytes", "S9 Fraction", "Individual Enzymes"
  ],
  massUnits: [
    "g", "mg", "ug", "mol", "mmol", "umol"
  ],
  timeUnits: [
    "min", "h", "d"
  ],
  volUnits: [
    "L", "mL"
  ],
  metabType: [
    "Linear", "Saturable"
  ],
  algorithms: [
    "Stiff", "Non-Stiff"
  ],
  metabParameterSource: [
    "User-specified", "IVIVE"
  ],
  renalElimSource: [ "User-specified", "Calculated" ]
}

class Sidebar extends Component {

  constructor(props){
    super(props);
    this.state = ({
      settings: this.props.settings
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({settings: nextProps.settings})
  }

  render() {

    const {settings} = this.state;
    return (
      <Sider
        className="app-sidebar"
        width={300}
        style={styles.sidebar}>

        <Collapse
          style={styles.collapse}
          bordered={false}
          defaultActiveKey={[ '1', '2', '3', '4' ]}>

          <Panel header="Analysis" key="1">
            <SettingsSelect
              items={options.analysisTypes}
              value={settings.analysis ? settings.analysis : options.analysisTypes[0]}
              label='Analysis Type'
              handleChange={this.props.setAnalysisType}/>
            <SettingsCheckBox
              handleChange={this.props.setVariability}
              label='Include Variability'
              id='variabilitycb'
              checked={typeof settings.variability !== 'undefined' ? settings.variability : true}/>
            <SettingsNumericInput
              handleChange={this.props.setPopSize}
              label='Population Size'
              value={settings.popSize ? settings.popSize : 100}
            />
          </Panel>

          <Panel header="Model Configuration" key="2">

            <Button type="default">Configure PBPK Compartments...</Button>

            <SettingsSelect
              handleChange={this.props.setPCMethod}
              items={options.pcMethods}
              value={settings.pcMethod ? settings.pcMethod : options.pcMethods[0]}
              label='Default PC Method'
            />
            <SettingsSelect
              handleChange={this.props.setOralAbsMethod}
              items={options.oralAbsMethods}
              value={settings.oralAbsMethod ? settings.oralAbsMethod : options.oralAbsMethods[0]}
              label='TOral Absorption Method'
            />
            <SettingsCheckBox
              handleChange={this.props.setEHPMet}
              label='Enable Extrahepatic Metabolism'
              checked={typeof settings.EHPMet !== 'undefined' ? settings.EHPMet : false}
            />
            <SettingsCheckBox
              handleChange={this.props.setMetTracking}
              label='Enable Metabolite Tracking'
              checked={typeof settings.metTrack !== 'undefined' ? settings.metTrack : false}/>
            <SettingsCheckBox
              handleChange={this.props.setActiveTransport}
              label='Enable Active Transport'
              checked={typeof settings.activeTrans !== 'undefined' ? settings.activeTrans : false}/>
            <SettingsCheckBox
              handleChange={this.props.setInhib}
              label='Enable Inhibition / Induction'
              checked={typeof settings.inhib !== 'undefined' ? settings.inhib : false}
            />
          </Panel>

          <Panel header="Display Units" key="3">
            <SettingsSelect
              label='Mass Units'
              handleChange={this.props.setMassUnit}
              items={options.massUnits}
              value={settings.massUnit ? settings.massUnit : options.massUnits[0]}
              classes="left-label"
            />
            <SettingsSelect
              label='Volume Units'
              handleChange={this.props.setVolUnit}
              items={options.volUnits}
              value={settings.volUnit ? settings.volUnit : options.volUnits[0]}
              classes="left-label"
            />
            <SettingsSelect
              label='Time Units'
              handleChange={this.props.setTimeUnit}
              items={options.timeUnits}
              value={settings.timeUnit ? settings.timeUnit : options.timeUnits[0]}
              classes="left-label"
            />
          </Panel>

          <Panel header="Simulation" key="4">
            <SettingsNumericInput
              handleChange={this.props.setTimestep}
              label='Time Step (hours)'
              value={settings.timestep ? settings.timestep : 0.1}
            />
            <SettingsSelect
              label='Time Units'
              handleChange={this.props.setAlgorithm}
              items={options.algorithms}
              value={settings.algorithm ? settings.algorithm : options.algorithms[0]}
              classes="left-label"
            />
            <SettingsNumericInput
              handleChange={this.props.setRelErr}
              label='Relative Err. Total'
              value={settings.relErr ? settings.relErr : '1e-8'}
            />
            <SettingsNumericInput
              handleChange={this.props.setAbsErr}
              label='Absolute Err. Total'
              value={settings.absErr ? settings.absErr : '1e-12'}
            />
            <Button type="default">Parameter Estimation Settings...</Button>
            <Button type="default">Sensitivity Analysis Settings...</Button>
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
