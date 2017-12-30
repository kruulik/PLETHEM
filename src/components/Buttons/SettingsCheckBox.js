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

  componentWillReceiveProps(nextProps){
    this.setState({checked: nextProps.checked})
  }

  handleChange = () => {
    this.setState({checked: !this.state.checked})
    this.props.handleChange(this.state.checked)
  }

  render() {
    const { id, checked, label, reducer } = this.props;

// This is just stupid but it works:
// checked={checked.target ? checked.target.checked : checked}

    return (
      <div className='checkbox-wrapper' >
        <Checkbox
          checked={checked.target ? checked.target.checked : checked}
          onChange={this.props.handleChange}>
          {label}
        </Checkbox>
      </div>
    )
  }
}

// defaultChecked={typeof checked === 'undefined' ? true : checked }

export default SettingsCheckBox;

const style = {
  paddingBottom: '10px',
  marginLeft: '2px'
}
