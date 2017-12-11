import React, {Component} from 'react';
import { Checkbox } from 'antd';

class SettingsCheckBox extends Component {
  render() {
    const { id, checked, label } = this.props;
    return (
      <div className='checkbox-wrapper' style={style}>
        <Checkbox id={id} checked={checked}>
          {label}
        </Checkbox>
      </div> )
  }
}

export default SettingsCheckBox;

const style = {
  paddingBottom: '10px',
  marginLeft: '2px'
}
