import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input, InputNumber, Select, Icon } from 'antd';
const Option = Select.Option;

class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
  }

  handleChangeText = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }

  handleChangeNum = (value) => {
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
            onBlur={this.check}
            suffix={<Icon type="check" onClick={this.check}/>}
          />
        );
      case 'select':
        return (
          <Select onChange={this.handleChangeSelect}>
            {
              this.props.options.map((option, i) => {
                return ( <Option key={i}  value={option}>{option}</Option> );
              })
            }
          </Select>
        );
      case 'action':
      return (
        <div className="editable-row-operations">
          {
            editable ?
              <span>
                <a onClick={() => this.save(record.key)}>Save</a>
                <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            : <a onClick={() => this.edit(record.key)}>Edit</a>
          }
        </div>)
      default:
      return null;
    }

  }

  render() {
    const { type } = this.props;
    const { value, editable } = this.state;

    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper"  >
              {this.cellType(type, value)}
            </div>
          :
          <div className="editable-cell-text-wrapper" onClick={this.edit}>
            {value || ' — '}
          </div>
        }
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
