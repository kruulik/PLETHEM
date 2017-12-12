import React from 'react';
import { Select } from 'antd';
const Option = Select.Option

class SettingsSelect extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      selected: this.props.defaultVal
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
    if (this.props.defaultVal){
      this.props.handleChange(this.state.selected);
    } else {
      this.props.handleChange(this.props.items[0]);
    }
  }


  render() {
    // console.log(this.state.selected);
    const { items, defaultVal, label, reducer } = this.props;
    const defaultValue = items[0];

    return (
      <div className='setting-wrapper'>
        <div className='label' style={style.label}>
          {label}
        </div>
        <Select
          size='default'
          reducer={reducer}
          defaultValue={defaultVal ? defaultVal : this.props.items[0]}
          style={style.select}
          placeholder={this.props.placeholder} onChange={this.props.handleChange}
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
