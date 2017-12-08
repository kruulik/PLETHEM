import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    return (
      <div className="app-header">
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
