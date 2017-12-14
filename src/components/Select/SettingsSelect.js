import React from 'react';
import { Select } from 'antd';
const Option = Select.Option

class SettingsSelect extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      selected: this.props.value
    })
  }

  mapOptions(items) {
    return (
      items.map((el, i) => {
        return (
          <Option key={i.toString()} value={el}>{el}</Option>
        )
      })
    )
  }

  componentDidMount(){
    this.props.handleChange(this.state.selected)
  }

  componentWillReceiveProps(nextProps){
    this.setState({selected: nextProps.value})
  }

  render() {
    const { items, value, label } = this.props;
    return (
      <div className='setting-wrapper'>
        <div className='label' style={style.label}>
          {label}
        </div>
        <Select
          size='default'
          value={value}
          style={style.select}
          onChange={this.props.handleChange}
        >
          {this.mapOptions(items)}
        </Select>
      </div>
    )
  }
}

export default SettingsSelect;

const style = {
  label: {
    paddingBottom: '6px',
    paddingLeft: '2px',
    fontSize: '13px'
  },
  select: {
    width: '100%',
    paddingBottom: '12px'
  }
}
