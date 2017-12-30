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
      count: this.props.dataSource.length
    };

  }

  onCellChange = ( key, dataIndex ) => {
    return (value) => {
      const dataSource = [...this.props.dataSource];
      const {table} = this.props;
      const row = dataSource.find( item => item.key === key ).key;
      const column = dataIndex;
      this.props.updateCell(row, value, table, column);
    };
  }

  // onDelete = ( key ) => {
  //   const dataSource = [...this.state.dataSource];
  //   this.setState( {
  //     dataSource: dataSource.filter( item => item.key !== key )
  //   } );
  // }

  handleAdd = () => {
    const { count, table } = this.state;
    this.props.addRow(table, count );
    this.setState({count: count + 1});
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
                onChange={this.onCellChange( record.key, col.dataIndex )}
              /> )
          } )
      } else {
        return ( {
            title : col.title,
            dataIndex: col.dataIndex,
          } )
      }
    } );
    this.setState({columns: cols})
  }

  componentDidMount() {
    const { table, dataSource } = this.props;
    const columns = tableColumns[table];
    this.createColumns(columns);
    this.props.createTable(table);
  }

  render() {
    const { columns } = this.state;
    const { dataSource } = this.props;

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
