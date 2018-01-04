import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { Table } from 'antd';

import tableColumns from 'constants/tableColumns';

import { selectTableData } from 'reducers/selectors';
import * as TableActions from 'actions/tableActions';


class SupplementalTable extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      columns: [],
    };
  }

  createColumns = ( columns ) => {
    const cols = columns.map( col => {
      return ( {
        title: col.title,
        dataIndex: col.dataIndex,
        width: col.width || 120,
      })
    });
    this.setState({columns: cols})
  }

  componentDidMount() {

  }

  render() {
    const { columns, selectedRowKeys } = this.state;
    let { dataSource } = this.props;

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
      <div>

        <Table
          pagination={false}
          scroll={{ x: scrollX, y: 300 }}
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

export default connect( mapStateToProps, mapDispatchToProps )( SupplementalTable );
