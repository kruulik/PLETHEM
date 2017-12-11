import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Layout } from 'antd';
const { Header } = Layout;

export default class AppHeader extends Component {

  componentDidMount(){
    this.props.requestTestState('some BS');
  }

  render() {
    return (
      <div className="app-header">
        <Header style={{ background: 'black', padding: 0, position: 'absolute', height: 60, width: '100%' }}>AppHeader</Header>
      </div>
    );
  }
}

AppHeader.propTypes = {
  onPress: PropTypes.func,
};
