import React, {Component} from 'react';
import { Checkbox } from 'antd';

class SettingsCheckBox extends Component {
  constructor(props){
    super(props);
    this.state = ({
      checked: this.props.checked
    });
  }

  componentDidMount(){
    if (typeof this.props.checked !== 'undefined') {
      this.handleChange(this.state.checked);
    } else {
      this.props.handleChange(true)
    }
  }

  handleChange = () => {
    this.setState({checked: !this.state.checked})
    this.props.handleChange(this.state.checked)
  }

  render() {
    const { id, checked, label, reducer } = this.props;
    const val = this.state.checked
    return (
      <div className='checkbox-wrapper' >
        <Checkbox
          defaultChecked={typeof checked === 'undefined' ? true : checked }
          onChange={this.handleChange}>
          {label}
        </Checkbox>
      </div>
    )
  }
}

export default SettingsCheckBox;

const style = {
  paddingBottom: '10px',
  marginLeft: '2px'
}
