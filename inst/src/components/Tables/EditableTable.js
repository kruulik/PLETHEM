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
      selectedRowKeys: [],
      scrollX: 0,
      scrollY: 300,
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

  createColumns = ( columns, defaultW = 120 ) => {
    let totalColumnsWidth = 0;
    const cols = columns.map( col => {
      totalColumnsWidth += col.width || defaultW;
      // debugger
      return ( {
        title: col.title,
        dataIndex: col.dataIndex,
        width: col.width || defaultW,
        render: ( text, record ) => (
          <EditableCell
            width={ col.width || defaultW }
            options={col.options}
            type={col.type}
            value={text}
            onChange={this.onCellChange( record.key, col.dataIndex )}
          /> )
        } )
    } );

    this.setState({
      columns: cols,
      scrollX: totalColumnsWidth,
    })
  }




  handleRowClick = (e, record) => {
    const { selectedRowKeys } = this.state;

// NOTE pressing alt allows multi-select, but only when ONE row is selected will the redux store be changed.

    if ( selectedRowKeys.includes(record.key) && e.nativeEvent.altKey ) {
      const i = selectedRowKeys.indexOf(record.key);
      this.setState({ selectedRowKeys:
        selectedRowKeys.filter((el, idx) => { return ( idx !== i ) })
      })
    } else if ( e.nativeEvent.altKey ) {
      this.setState({ selectedRowKeys: [...selectedRowKeys, record.key] });
    } else {
      this.setState({ selectedRowKeys: [record.key] });
      this.props.selectSingleRow(this.props.table, record.key);
    }
  }




  componentDidMount() {
    const { table, dataSource } = this.props;
    const { scrollX, scrollY } = this.state;

    const columns = tableColumns[table];
    this.createColumns(columns);
    this.props.createTable(table);

  }

  //
  //
  // scrollDimensions = (x, y) => {
  //   debugger
  //   const { columns } = this.state;
  //   this.setState({
  //     scrollX: columns.map(col => {
  //       x += col.width;
  //     }),
  //     scrollY: 300
  //   });
  //
  // }

  render() {
    const { columns, selectedRowKeys, scrollX, scrollY } = this.state;
    let { dataSource, tabsWH } = this.props;
    const rowClassName = (record) => {
      if (selectedRowKeys.includes(record.key)) {
        return 'row-selected';
      }
    }

console.log(scrollX)

    return (
      <div className="editable-table-wrapper">
        <div className="table-actions-row">
          <Button ghost type="primary" className="editable-table-btn" onClick={this.handleAdd}>Add Item</Button>
          <Button ghost type="danger" disabled={selectedRowKeys.length === 0 ? true : false} className="editable-table-btn" onClick={this.handleRemove}>Remove Selection</Button>
        </div>
        <Table
          pagination={false}
          scroll={{ x: scrollX, y: scrollY }}
          onRow={(record) =>
            ({
              onClick: (e) => this.handleRowClick(e, record)
            })}
          rowClassName={rowClassName}
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
    dataSource: selectTableData(state, table),
    ownProps
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...TableActions}, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps )( EditableTable );
