import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Button } from 'antd';

export default class Header extends Component {

  componentDidMount(){
    this.props.requestTestState('some BS');
  }

  render() {
    return (
      <div className="app-header">
        <Button >Hello?</Button>
        <span className="logo">PLETHEM Pro</span>
        <div className="right-nav">
          <div onClick={(e) => console.log(e.target)}></div>
        </div>

      </div>
    );
  }
}



Header.propTypes = {
  onPress: PropTypes.func,
};
