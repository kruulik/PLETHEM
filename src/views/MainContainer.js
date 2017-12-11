import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';

import { HeaderContainer } from "components";

class MainContainer extends Component {
  render() {
    return (
      <div className="main-content">
        <HeaderContainer />
      </div>
    );
  }
}

export default MainContainer;
