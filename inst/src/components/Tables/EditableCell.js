import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input, InputNumber, Select, Icon } from 'antd';
const Option = Select.Option;

class EditableCell extends React.Component {
  state = {
    value: this.props.value || 0,
    editable: false,
  }

  handleChangeText = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }

  handleChangeNum = (value) => {

    this.setState({ value });
  }

  handleChangeSelect = (value) => {
    this.setState({ editable: false });
    this.setState({ value });
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
            value={value}
            onChange={this.handleChangeNum}
            onBlur={() => this.setState({ editable: false })}
            suffix={<Icon type="check" onClick={this.check}/>}
          />
        );
      case 'select':

        return (
          <Select
            onChange={this.handleChangeSelect} 
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


const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

const style = {
}

export default connect(mapStateToProps, null)(EditableCell);
