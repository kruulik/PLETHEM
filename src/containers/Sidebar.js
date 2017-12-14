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

          <Panel header="Compound Data" key="1">
            <SettingsSelect
              reducer="datasets"
              items={options.datasets}
              value={settings.dataset ? settings.dataset : options.datasets[0]}
              label='Dataset'
              handleChange={this.props.setDataset}/>
            <SettingsButton label='Import Dataset...'/>
          </Panel>

          <Panel header="Physiology" key="2">
            <SettingsSelect
              handleChange={this.props.setSpecies}
              items={options.species}
              value={settings.species ? settings.species : options.species[0]}
            label='Target Species'/>
            <SettingsCheckBox
              handleChange={this.props.setAgeDep}
              label='Include Age Dependence'
              id='agedepcb'
              checked={typeof settings.ageDep !== 'undefined' ? settings.ageDep : true}/>
            <SettingsCheckBox
              handleChange={this.props.setVariability}
              label='Include Variability'
              id='variabilitycb'
              checked={typeof settings.variability !== 'undefined' ? settings.variability : true}/>
            <SettingsNumericInput
              handleChange={this.props.setPopSize}
              label='Population Size'
              value={settings.popSize ? settings.popSize : 50}/>
            <SettingsNumericInput
              handleChange={this.props.setPercMale}
              label='Percent Male'
              value={settings.percMale ? settings.percMale : 50}/>
            <SettingsNumericInput
              handleChange={this.props.setMinAge}
              label='Minimum Age (years)'
              value={settings.minAge ? settings.minAge : 10}/>
            <SettingsNumericInput
              handleChange={this.props.setMaxAge}
              label='Maximum Age (years)'
              value={settings.maxAge ? settings.maxAge : 80}/>
          </Panel>

          <Panel header="ADME" key="3">
            <SettingsSelect
              handleChange={this.props.setMetParaSource}
              items={options.metabParameterSource}
              value={settings.metParaSource ? settings.metParaSource : options.metabParameterSource[0]}
            label='Metabolic Parameter Source'/>
            <SettingsSelect
              handleChange={this.props.setIVAssay}
              items={options.assayType}
              value={settings.ivAssay ? settings.ivAssay : options.assayType[0]}
            label='In Vitro Assay'/>
            <SettingsCheckBox
              handleChange={this.props.setSatMet}
              label='Use Saturable Metabolism'
              id='satmetabcb'
              checked={typeof settings.satMet !== 'undefined' ? settings.satMet : true}/>
            <SettingsSelect
              handleChange={this.props.setRenalElim}
              items={options.renalElimSource}
              value={settings.renalElim ? settings.renalElim : options.renalElimSource[0]}
            label='Renal Elimination Source'/>
            <SettingsCheckBox
              handleChange={this.props.setIncludeEhccb}
              label='Include Enterohepatic Cycling'
              id='includeehccb'
              checked={typeof settings.includeehccb !== 'undefined' ? settings.includeehccb : true}/>
          </Panel>

          <Panel header="Simulation" key="4">
            <SettingsNumericInput
              handleChange={this.props.setTimestep}
              label='Time Step (hours)'
              value={settings.timestep ? settings.timestep : 0.1}/>
            <SettingsNumericInput
              handleChange={this.props.setStartAge}
              label='Start Age (years)'
              value={settings.startAge ? settings.startAge : 25}/>
            <SettingsNumericInput
              handleChange={this.props.setDuration}
              label='Duration (days)'
              value={settings.duration ? settings.duration : 7}/>
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
