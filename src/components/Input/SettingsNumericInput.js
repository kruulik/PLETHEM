import React, { Component } from 'react';

import { InputNumber } from 'antd';

class SettingsNumericInput extends Component {
  constructor(props){
    super(props);
    this.state = ({
      value: this.props.defaultVal
    })
  }

  onChange = (e) => {
    this.setState({value: e})
  }

  render() {
    // console.log(this.state.value)
    const { label, defaultVal, reducer } = this.props;
    return (
      <div className='settingdiv'>
        <table style={style}>
          <tbody>
            <tr>
              <td width='70%'>
                {label}
              </td>
              <td width='30%'>
                <InputNumber
                  reducer={reducer}
                  type='secondary'
                  size='default'
                  defaultValue={defaultVal}
                  onChange={() => this.props.handleChange(this.state.checked)}/>
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
