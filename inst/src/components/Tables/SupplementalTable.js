import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { Table } from 'antd';
import { EditableCell } from 'components';

// import tableColumns from 'constants/tableColumns';
import {columns} from 'constants/supplementalTables';

import { selectSupplementalData } from 'reducers/selectors';
import * as TableActions from 'actions/tableActions';


class SupplementalTable extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      columns: [],
      selectedRowKeys: [],
      dataSource: []
    };
  }

  // createColumns = ( columns ) => {
  //   const cols = columns.map( col => {
  //     return ( {
  //       title: col.title,
  //       dataIndex: col.dataIndex,
  //       width: col.width || 120,
  //     })
  //   });
  //   this.setState({columns: cols})
  // }

  onCellChange = ( key, dataIndex ) => {
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

  createColumns = ( columns, defaultW = 120 ) => {
    let totalColumnsWidth = 0;
    const cols = columns.map( col => {
      totalColumnsWidth += col.width || defaultW;
      if (col.editable) {
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
              // onChange={this.onCellChange( record.key, col.dataIndex )}
            /> )
          } )
      } else {
        return ({
          title: col.title,
          dataIndex: col.dataIndex,
          width: col.width || defaultW
        })

      }

    } );

    this.setState({
      columns: cols,
      scrollX: totalColumnsWidth,
    })
  }


  componentDidMount() {
    const { parentTable } = this.props;
    this.createColumns(columns);
  }

  render() {
    const { columns, selectedRowKeys } = this.state;
    let { dataSource, scrollY } = this.props;

    const rowClassName = (record) => {
      if (selectedRowKeys.includes(record.key)) {
        return 'row-selected';
      }
    }

    let scrollX = 0;
    if (columns.length > 0) {
      columns.map(col => {
        scrollX += col.width;
      })
    }

    return (
      <div className="supplemental-table">
        <Table
          pagination={false}
          scroll={{ x: scrollX, y: scrollY}}
          rowClassName={rowClassName}
          bordered={true}
          dataSource={dataSource ? dataSource : [] }
          columns={columns ? columns : []}
        />
      </div> );
  }
}

const mapStateToProps = ( state, ownProps ) => {
  const table = ownProps.parentTable;
  let dataSource = [];
  return {
    dataSource: selectSupplementalData( state, table ),
    ownProps
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...TableActions}, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps )( SupplementalTable );
