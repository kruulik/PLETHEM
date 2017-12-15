import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input, Icon } from 'antd';

class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
  }

  handleChange = (e) => {
    const value = e.target.value;
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

  render() {
    const { value, editable } = this.state;
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper"  >
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
                suffix={<Icon type="check" onClick={this.check}/>}
              />
            </div>
          :
          <div className="editable-cell-text-wrapper" >
            {value || ' — '}
            <Icon
              type="edit"
              className="editable-cell-icon"
              onClick={this.edit}
            />
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
