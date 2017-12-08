import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';

import Header from "components/Header";

class MainContainer extends Component {
  render() {
    return (
      <div className="main-content">
        <Header />
      </div>
    );
  }
}

export default MainContainer;
