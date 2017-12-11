import React, {Component} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import {Layout} from 'antd';
const {Sider} = Layout;

export default class Sidebar extends Component {

  render() {
    return (<Sider style={{
        overflow: 'auto',
        position: 'fixed',
        height: 'calc(100vh - 60px)',
        left: 0,
        top: 60,
        width: 300
      }}>Sider</Sider>);
  }
}

Sidebar.propTypes = {
  onPress: PropTypes.func
};
