import React, { Component } from 'react';
import { connect } from 'react-redux';

import FileSaver from 'file-saver'

import PropTypes from 'prop-types';

import { Layout, Button, Icon } from 'antd';
const { Header } = Layout;

class AppHeader extends Component {

  handleSave = () => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();


    const json = window.localStorage.state;
    const file = new File([json], `PLETHEM_${h}_${m}_${s}.json`, {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(file);
  }

  handleLoad = () => {

  }

  render() {
    return (
      <Header className="app-header">
        <span className="logo">PLETHEM PRO</span>
        <div className="right-nav">
          <Button type="default" onClick={this.handleSave} icon="download">Save Project</Button>
          <Button type="default" onClick={this.handleLoad} icon="upload">Load Project</Button>
        </div>
      </Header>
    );
  }
}

AppHeader.propTypes = {
  onPress: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, null)(AppHeader);
