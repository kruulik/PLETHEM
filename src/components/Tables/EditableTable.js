import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table, Icon, Popconfirm, Button } from 'antd';

import { EditableCell } from 'components';

class EditableTable extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      dataSource: [],
      columns: [],
      count: 0
    };

  }

  onCellChange = ( key, dataIndex ) => {
    return( value ) => {
      const dataSource = [...this.state.dataSource];
      const target = dataSource.find( item => item.key === key );
      if ( target ) {
        target[ dataIndex ] = value;
        this.setState( { dataSource } );
      }
    };
  }

  onDelete = ( key ) => {
    const dataSource = [...this.state.dataSource];
    this.setState( {
      dataSource: dataSource.filter( item => item.key !== key )
    } );
  }

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count
    };
    this.setState( {
      dataSource: [
        ...dataSource,
        newData
      ],
      count: count + 1
    } );
  }

  createColumns = ( columns ) => {

    const cols = columns.map( col => {
      if ( col.editable ) {
        return ( {
            title : col.title,
            dataIndex: col.dataIndex,
            render: ( text, record ) => ( <EditableCell value={text} onChange={this.onCellChange( record.key, col.dataIndex )}/> )
          } )
      } else {
        return ( {
            title : 'name',
            dataIndex: 'name'
          } )
      }
    } );

    this.setState({columns: cols})

  }

  componentDidMount() {
    const { dataSource, columns } = this.props;
    this.setState( { dataSource: dataSource } );
    this.createColumns(columns);
  }

  render() {
    const { dataSource, columns } = this.state;
    return ( <div>
      <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>

      <Table bordered={true} dataSource={dataSource} columns={columns ? columns : []}/>
    </div> );
  }
}

const mapStateToProps = ( state ) => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const style = {}

export default connect( mapStateToProps, null )( EditableTable );
