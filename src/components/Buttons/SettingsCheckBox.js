import React, {Component} from 'react';
import { Checkbox } from 'antd';

class SettingsCheckBox extends Component {
  constructor(props){
    super(props);
    this.state = ({
      checked: this.props.checked
    });
    // this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    this.setState({checked: e.target.checked});
  }

  render() {
    // console.log(this.state.checked);
    const { id, checked, label, reducer } = this.props;
    return (
      <div className='checkbox-wrapper' >
        <Checkbox 
          reducer={reducer}
          defaultChecked={checked}
          onChange={this.props.handleChange}>
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
