import React, { Component } from 'react';

import { InputNumber } from 'antd';

class SettingsNumericInput extends Component {
  constructor(props){
    super(props);
    this.state = ({
      value: this.props.value
    })
  }

  componentDidMount(){
    this.props.handleChange(this.state.value)
  }

// This ensures each child component rerenders
  componentWillReceiveProps(nextProps){
    this.setState({value: nextProps.value})
  }

  render() {
    const { label, value } = this.props;
    return (
      <div className='setting-wrapper left-label'>
        <div className='label' style={style.label}>
          {label}
        </div>
        <InputNumber
          type='secondary'
          size='default'
          value={value}
          onChange={this.props.handleChange}
        />
      </div>
    )
  }
}

export default SettingsNumericInput;

const style = {
  paddingBottom: '4px'
}
