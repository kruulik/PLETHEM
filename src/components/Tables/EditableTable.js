import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { Table, Icon, Popconfirm, Button } from 'antd';

import { EditableCell } from 'components';
import tableColumns from 'constants/tableColumns';

import * as TableActions from 'actions/tableActions';
import { selectTableData } from 'reducers/selectors';

class EditableTable extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      table: this.props.table,
      columns: [],
      dataSource: [],
      count: 0
    };

  }

  onCellChange = ( key, dataIndex ) => {

    return( value ) => {
      debugger
      const dataSource = [...this.props.dataSource];
      const target = dataSource.find( item => item.key === key );
      debugger
      if ( target ) {
        target[ dataIndex ] = value;
        this.setState( { dataSource } );
        debugger
        this.props.updateCell();
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
    const { count, table } = this.state;
    // const newData = {
    //   key: count
    // };

    this.props.addRow(table, count );
    this.setState({count: count + 1});

    // this.setState( {
    //   dataSource: [
    //     ...dataSource,
    //     newData
    //   ],
    //   count: count + 1
    // } );
  }

  createColumns = ( columns ) => {
    const cols = columns.map( col => {
      if ( col.editable ) {
        return ( {
            title : col.title,
            dataIndex: col.dataIndex,
            render: ( text, record ) => (
              <EditableCell

                type={col.type}
                value={text}
                onChange={this.onCellChange( record.key, col.key )}
              /> )
          } )
      } else {
        return ( {
            title : col.title,
            dataIndex: col.dataIndex,
            key: col.key
          } )
      }
    } );
    this.setState({columns: cols})
  }

  componentDidMount() {
    const { table } = this.props;
    const columns = tableColumns[table];

    // selector gets table's data from the tableData slice of state
    // and sets it to props
    // this.setState( { dataSource: dataSource } );

    this.props.createTable(table);
    this.createColumns(columns);

  }

  render() {
    const { columns } = this.state;
    const { dataSource } = this.props;

// debugger

    return (
      <div>
        <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>

        <Table
          bordered={true}
          dataSource={dataSource ? dataSource : []}
          columns={columns ? columns : []}
        />
      </div> );
  }
}

const mapStateToProps = ( state, ownProps ) => {
  const table = ownProps.table;
  return {
    dataSource: selectTableData(state, table)
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...TableActions}, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps )( EditableTable );
