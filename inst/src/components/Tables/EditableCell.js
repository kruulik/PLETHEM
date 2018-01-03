import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input, InputNumber, Select, Icon } from 'antd';
const Option = Select.Option;

class EditableCell extends React.Component {

  constructor(props){
    super(props);
    this.state = ({
      value: this.props.value,
      editable: false,
    })
  }

  handleChangeText = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }

  handleChangeInput = (value) => {

    // NOTE:  Might need to throttle redux store update

    this.setState({ editable: false, value });
    this.props.onChange(value);
  }

  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }

  edit = () => {
    this.setState({ editable: true });
  }

  cellType = (type, value) => {

    switch ( type ) {
      case 'text':
        return (
          <Input
            value={value}
            onBlur={this.check}
            onChange={this.handleChangeText}
            onPressEnter={this.check}
            suffix={<Icon type="check" onClick={this.check}/>}
          />
        );
      case 'numeric':
        return (
          <InputNumber
            value={value || 0}
            onChange={this.handleChangeInput}
            suffix={<Icon type="check" onClick={this.check}/>}
          />
        );
      case 'select':

        return (
          <Select
            onChange={this.handleChangeInput}
            value={value || this.props.options[0]}
          >
            {
              this.props.options.map((option, i) => {
                return ( <Option key={i}  value={option}>{option}</Option> );
              })
            }
          </Select>
        );
      default:
      return null;
    }
  }

  render() {
    const { type } = this.props;
    const { value, editable } = this.state;
    let cell;

    if ( type === 'text' ) {
      if (editable) {
        cell = (
          <div className="editable-cell-input-wrapper" >
            {this.cellType(type, value)}
          </div>
        )
      } else {
        cell = (
          <div className="editable-cell-text-wrapper" onClick={ this.edit }>
            { value || ' — '}
          </div>
        )
      }
    } else {
      cell = (
      <div className="editable-cell-input-wrapper" onClick={ this.edit }>
        {this.cellType(type, value)}
      </div>
      )
    }

    return (
      <div className="editable-cell">
        { cell }
      </div>
    );
  }
}

export default connect()(EditableCell);
