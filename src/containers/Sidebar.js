import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Layout, Collapse } from 'antd';
const { Sider } = Layout;
const { Panel } = Collapse;

import { SettingsSelect } from 'components';
import { SettingsButton } from 'components';
import { SettingsCheckBox } from 'components';
import { SettingsNumericInput } from 'components';

const options = {
  datasets: ['Default HTTK Dataset'],
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

export default class Sidebar extends Component {

  render() {
    return ( <Sider className="app-sidebar" width={300} style={styles.sidebar}>
      <Collapse style={styles.collapse} bordered={false} defaultActiveKey={[ '1', '2', '3', '4' ]}>
        <Panel header="Compound Data" key="1">
          <SettingsSelect items={options.datasets} selectedIdx={0} label='Dataset'/>
          <SettingsButton label='Import Dataset...'/>
        </Panel>
        <Panel header="Physiology" key="2">
          <SettingsSelect items={options.species} selectedIdx={0} label='Target Species'/>
          <SettingsCheckBox label='Include Age Dependence' id='agedepcb' checked={true}/>
          <SettingsCheckBox label='Include Variability' id='variabilitycb' checked={true}/>
          <SettingsNumericInput label='Population Size' defaultVal={50}/>
          <SettingsNumericInput label='Percent Male' defaultVal={50}/>
          <SettingsNumericInput label='Minimum Age (years)' defaultVal={10}/>
          <SettingsNumericInput label='Maximum Age (years)' defaultVal={80}/>
        </Panel>
        <Panel header="ADME" key="3">
          <SettingsSelect items={options.metabParameterSource} selectedIdx={1} label='Metabolic Parameter Source'/>
          <SettingsSelect items={options.assayType} selectedIdx={0} label='In Vitro Assay'/>
          <SettingsCheckBox label='Use Saturable Metabolism' id='satmetabcb' checked={true}/>
          <SettingsSelect items={options.renalElimSource} selectedIdx={0} label='Renal Elimination Source'/>
          <SettingsCheckBox label='Include Enterohepatic Cycling' id='includeehccb' checked={true}/>
        </Panel>
        <Panel header="Simulation" key="4">
          <SettingsNumericInput label='Time Step (hours)' defaultVal={0.1}/>
          <SettingsNumericInput label='Start Age (years)' defaultVal={25}/>
          <SettingsNumericInput label='Duration (days)' defaultVal={7}/>
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
