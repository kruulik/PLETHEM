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
      count: this.props.dataSource.length,
      selectedRowKeys: []
    };

  }

  onCellChange = ( key, dataIndex ) => {
    return (value) => {
      const dataSource = [...this.props.dataSource];
      const {table} = this.props;
      const row = dataSource.find( item => item.key === key ).key.toString();
      const column = dataIndex;
      this.props.updateCell(row, value, table, column);
    };
  }

  handleRemove = () => {
    const rowIDs = this.state.selectedRowKeys;
    const {table} = this.props;
    this.props.removeRows( table, rowIDs );
    this.setState({ selectedRowKeys: [] });
  }

  handleAdd = () => {
    const { count, table } = this.state;
    this.props.addRow(table, count.toString() );
    this.setState({count: count + 1});
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
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
    const { columns, selectedRowKeys } = this.state;
    let { dataSource } = this.props;
    const rowSelection = {
      selectedRowKeys,
      fixed: true,
      onChange: this.onSelectChange
    };
    let scrollX = 1500;

    return (
      <div>
        <div className="table-actions-row">
          <Button ghost type="primary" className="editable-table-btn" onClick={this.handleAdd}>Add Item</Button>
          <Button ghost type="danger" disabled={selectedRowKeys.length === 0 ? true : false} className="editable-table-btn" onClick={this.handleRemove}>Remove Selection</Button>
        </div>
        <Table
          scroll={{ x: scrollX}}
          bordered={true}
          dataSource={dataSource ? dataSource : []}
          rowSelection={rowSelection}
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
