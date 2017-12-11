import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Layout, Button, Icon } from 'antd';
const { Header } = Layout;

export default class AppHeader extends Component {

  componentDidMount(){
    this.props.requestTestState('some BS');
  }

  render() {
    return (
      <Header className="app-header">
        <span className="logo">PLETHEM PRO</span>
        <div className="right-nav">
          <Button type="default"  icon="download">Save Project</Button>
          <Button type="default"  icon="upload">Load Project</Button>
        </div>
      </Header>
    );
  }
}

AppHeader.propTypes = {
  onPress: PropTypes.func,
};
