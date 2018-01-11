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
      scrollY: 350,
    };
    this.handleAdd = this.handleAdd.bind(this)

  }

  onCellChange = ( key, dataIndex ) => {
    console.log('called from cellChange');
    const {updateCell, getDetails} = this.props;
    return (value) => {
      const dataSource = [...this.props.dataSource];
        const {table} = this.props;
      const row = dataSource.find( item => item.key === key ).key.toString();
      const column = dataIndex;
      updateCell(row, value, table, column);
      // debugger
      // getDetails(table, row);
    };
  }

  handleRemove = () => {
    const rowIDs = this.state.selectedRowKeys;
    const {table} = this.props;
    this.props.removeRows( table, rowIDs );
    this.setState({ selectedRowKeys: [] });
  }

  handleAdd = () => {
    const { table } = this.state;
    const { rowDefaults } = this.props;
    this.props.addRow(table, rowDefaults );
  }

  createColumns = ( columns, defaultW = 120 ) => {
    let totalColumnsWidth = 0;
    const cols = columns.map( col => {
      totalColumnsWidth += col.width || defaultW;
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
    const { selectSingleRow, table, getDetails, state } = this.props;

// NOTE pressing alt allows multi-select, but only when ONE row is selected will the redux store be changed.

    if ( selectedRowKeys.includes(record.key) && e.nativeEvent.altKey ) {
      const i = selectedRowKeys.indexOf(record.key);
      this.setState({ selectedRowKeys:
        selectedRowKeys.filter((el, idx) => { return ( idx !== i ) })
      });

      // Not sure if necessary but this deselects the row from store
      selectedRowKeys.length < 2 ? selectSingleRow(table, -1) : null;

    } else if ( e.nativeEvent.altKey ) {
      this.setState({ selectedRowKeys: [...selectedRowKeys, record.key] });
    } else {
      this.setState({ selectedRowKeys: [record.key] });
      selectSingleRow(table, record.key);
      console.log('called from selectRow');
      getDetails(table, record.key);
    }
  }

  disabled = () => {
    return this.state.selectedRowKeys.length === 0
  }


  componentDidMount() {
    const { table, dataSource } = this.props;

    const columns = tableColumns[table];
    this.createColumns(columns);
  }


  render() {
    const { columns, selectedRowKeys, scrollX, scrollY } = this.state;
    let { dataSource, tabsWH, actions, pagination, state } = this.props;
    const rowClassName = (record) => {
      if (selectedRowKeys.includes(record.key)) {
        return 'row-selected';
      }
    }

console.log(dataSource);
    return (
      <div className="editable-table-wrapper">
        <div className="table-actions-row">
          {actions}
          <Button
            ghost
            type="danger"
            disabled={ this.disabled() }
            className="editable-table-btn"
            onClick={() => this.handleRemove() }
          >Remove Selection</Button>
        </div>
        <Table
          pagination={pagination}
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
    ownProps,
    state: state.tables
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...TableActions}, dispatch)
};

export default connect( mapStateToProps, mapDispatchToProps, null, {withRef: true} )( EditableTable );
