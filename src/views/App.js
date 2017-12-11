import React, { Component } from 'react';

import { Switch, Route, Link } from 'react-router-dom';
import Main from './Main';

class App extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.errorMessage && this.props.errorMessage !== nextProps.errorMessage) {
      // handle error here
    }
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.updateRouterState({
        pathname: nextProps.location.pathname,
        params: nextProps.params
      });
    }
  }

  render() {
      return (
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      );
  }
}

export default App;
