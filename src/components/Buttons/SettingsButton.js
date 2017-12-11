import React from 'react';

import { Button } from 'antd';

class SettingsButton extends React.Component {
  render() {
    return (
      <Button type='secondary' size='default'>{this.props.label}</Button>
    );
  }
}

export default SettingsButton;

const styles = {
  backgroundColor: '#eee'
}
