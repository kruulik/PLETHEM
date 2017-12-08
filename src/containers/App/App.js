import React, { Component } from 'react';

export default class App extends Component {

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
        <h1>wtffff</h1>
      );
  }
}
