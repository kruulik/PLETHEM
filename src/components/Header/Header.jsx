import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Button } from 'antd';

import { requestTestState } from 'actions/testActions';

class Header extends Component {

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

const mapStateToProps = ({ state }) => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestTestState: () => dispatch(requestTestState())
  };
};

Header.propTypes = {
  onPress: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
