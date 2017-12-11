import React, { Component } from 'react';

import { InputNumber } from 'antd';

class SettingsNumericInput extends Component {

  render() {
    const { label, defaultVal } = this.props; 
    return (
      <div className='settingdiv'>
        <table style={style}>
          <tbody>
            <tr>
              <td width='70%'>
                {label}
              </td>
              <td width='30%'>
                <InputNumber type='secondary' size='default' defaultValue={defaultVal}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div> )
  }
}

export default SettingsNumericInput;

const style = {
  paddingBottom: '4px',
  width: '100%'
}
