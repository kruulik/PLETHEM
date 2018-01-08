webpackHotUpdate(0,{

/***/ "./src/components/Tables/SupplementalTable.js":
/*!****************************************************!*\
  !*** ./src/components/Tables/SupplementalTable.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _table = __webpack_require__(/*! antd/lib/table */ "./node_modules/antd/lib/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(/*! antd/lib/table/style */ "./node_modules/antd/lib/table/style/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _tableColumns = __webpack_require__(/*! constants/tableColumns */ "./src/constants/tableColumns.js");

var _tableColumns2 = _interopRequireDefault(_tableColumns);

var _supplementalTables = __webpack_require__(/*! constants/supplementalTables */ "./src/constants/supplementalTables.js");

var _supplementalTables2 = _interopRequireDefault(_supplementalTables);

var _selectors = __webpack_require__(/*! reducers/selectors */ "./src/reducers/selectors.js");

var _tableActions = __webpack_require__(/*! actions/tableActions */ "./src/actions/tableActions.js");

var TableActions = _interopRequireWildcard(_tableActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SupplementalTable = function (_React$Component) {
  (0, _inherits3.default)(SupplementalTable, _React$Component);

  function SupplementalTable(props) {
    (0, _classCallCheck3.default)(this, SupplementalTable);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SupplementalTable.__proto__ || (0, _getPrototypeOf2.default)(SupplementalTable)).call(this, props));

    _this.createColumns = function () {
      return _this.__createColumns__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      columns: []
    };
    return _this;
  }

  (0, _createClass3.default)(SupplementalTable, [{
    key: '__createColumns__REACT_HOT_LOADER__',
    value: function __createColumns__REACT_HOT_LOADER__() {
      return this.__createColumns__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__createColumns__REACT_HOT_LOADER__',
    value: function __createColumns__REACT_HOT_LOADER__(columns) {
      var cols = columns.map(function (col) {
        return {
          title: col.title,
          dataIndex: col.dataIndex,
          width: col.width || 120
        };
      });
      this.setState({ columns: cols });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          columns = _state.columns,
          selectedRowKeys = _state.selectedRowKeys;
      var dataSource = this.props.dataSource;


      var rowClassName = function rowClassName(record) {
        if (selectedRowKeys.includes(record.key)) {
          return 'row-selected';
        }
      };

      var scrollX = 0;
      if (columns.length > 0) {
        columns.map(function (col) {
          scrollX += col.width;
        });
      }

      return _react2.default.createElement(
        'div',
        { className: 'supplemental-table' },
        _react2.default.createElement(
          'div',
          null,
          'suasdfasdfasdfasdfasp'
        ),
        _react2.default.createElement(_table2.default, {
          pagination: false,
          scroll: { x: scrollX },
          onRow: function onRow(record) {
            return {
              onClick: function onClick(e) {
                return _this2.handleRowClick(e, record);
              }
            };
          },
          rowClassName: rowClassName,
          bordered: true,
          dataSource: dataSource ? dataSource : [],
          columns: columns ? columns : []
        }),
        'bla'
      );
    }
  }]);
  return SupplementalTable;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var table = ownProps.table;
  return {
    dataSource: (0, _selectors.selectTableData)(state, table),
    ownProps: ownProps
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)((0, _extends3.default)({}, TableActions), dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SupplementalTable);

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SupplementalTable, 'SupplementalTable', '/Users/karolis/Dev/PLETHEM/inst/src/components/Tables/SupplementalTable.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/karolis/Dev/PLETHEM/inst/src/components/Tables/SupplementalTable.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/karolis/Dev/PLETHEM/inst/src/components/Tables/SupplementalTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/karolis/Dev/PLETHEM/inst/src/components/Tables/SupplementalTable.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', '/Users/karolis/Dev/PLETHEM/inst/src/components/Tables/SupplementalTable.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYWJsZXMvU3VwcGxlbWVudGFsVGFibGUuanMiXSwibmFtZXMiOlsiVGFibGVBY3Rpb25zIiwiU3VwcGxlbWVudGFsVGFibGUiLCJwcm9wcyIsInN0YXRlIiwiY29sdW1ucyIsImNvbHMiLCJtYXAiLCJ0aXRsZSIsImNvbCIsImRhdGFJbmRleCIsIndpZHRoIiwic2V0U3RhdGUiLCJzZWxlY3RlZFJvd0tleXMiLCJkYXRhU291cmNlIiwicm93Q2xhc3NOYW1lIiwicmVjb3JkIiwiaW5jbHVkZXMiLCJrZXkiLCJzY3JvbGxYIiwibGVuZ3RoIiwieCIsIm9uQ2xpY2siLCJlIiwiaGFuZGxlUm93Q2xpY2siLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsInRhYmxlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFJQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0lBQVlBLFk7Ozs7OztJQUdOQyxpQjs7O0FBQ0osNkJBQWFDLEtBQWIsRUFBcUI7QUFBQTs7QUFBQSw0SkFDWkEsS0FEWTs7QUFBQTtBQUFBO0FBQUE7O0FBR25CLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTO0FBREUsS0FBYjtBQUhtQjtBQU1wQjs7Ozs7Ozs7O3dEQUVpQkEsTyxFQUFhO0FBQzdCLFVBQU1DLE9BQU9ELFFBQVFFLEdBQVIsQ0FBYSxlQUFPO0FBQy9CLGVBQVM7QUFDUEMsaUJBQU9DLElBQUlELEtBREo7QUFFUEUscUJBQVdELElBQUlDLFNBRlI7QUFHUEMsaUJBQU9GLElBQUlFLEtBQUosSUFBYTtBQUhiLFNBQVQ7QUFLRCxPQU5ZLENBQWI7QUFPQSxXQUFLQyxRQUFMLENBQWMsRUFBQ1AsU0FBU0MsSUFBVixFQUFkO0FBQ0Q7Ozt3Q0FFbUIsQ0FFbkI7Ozs2QkFFUTtBQUFBOztBQUFBLG1CQUM4QixLQUFLRixLQURuQztBQUFBLFVBQ0NDLE9BREQsVUFDQ0EsT0FERDtBQUFBLFVBQ1VRLGVBRFYsVUFDVUEsZUFEVjtBQUFBLFVBRURDLFVBRkMsR0FFYyxLQUFLWCxLQUZuQixDQUVEVyxVQUZDOzs7QUFJUCxVQUFNQyxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFZO0FBQy9CLFlBQUlILGdCQUFnQkksUUFBaEIsQ0FBeUJELE9BQU9FLEdBQWhDLENBQUosRUFBMEM7QUFDeEMsaUJBQU8sY0FBUDtBQUNEO0FBQ0YsT0FKRDs7QUFNQSxVQUFJQyxVQUFVLENBQWQ7QUFDQSxVQUFJZCxRQUFRZSxNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQ3RCZixnQkFBUUUsR0FBUixDQUFZLGVBQU87QUFDakJZLHFCQUFXVixJQUFJRSxLQUFmO0FBQ0QsU0FGRDtBQUdEOztBQUdELGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQ0Usc0JBQVksS0FEZDtBQUVFLGtCQUFRLEVBQUVVLEdBQUdGLE9BQUwsRUFGVjtBQUdFLGlCQUFPLGVBQUNILE1BQUQ7QUFBQSxtQkFDSjtBQUNDTSx1QkFBUyxpQkFBQ0MsQ0FBRDtBQUFBLHVCQUFPLE9BQUtDLGNBQUwsQ0FBb0JELENBQXBCLEVBQXVCUCxNQUF2QixDQUFQO0FBQUE7QUFEVixhQURJO0FBQUEsV0FIVDtBQU9FLHdCQUFjRCxZQVBoQjtBQVFFLG9CQUFVLElBUlo7QUFTRSxzQkFBWUQsYUFBYUEsVUFBYixHQUEwQixFQVR4QztBQVVFLG1CQUFTVCxVQUFVQSxPQUFWLEdBQW9CO0FBVi9CLFVBRkY7QUFBQTtBQUFBLE9BREY7QUFpQkQ7OztFQTNENkIsZ0JBQU1vQixTOztBQThEdEMsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFFdEIsS0FBRixFQUFTdUIsUUFBVCxFQUF1QjtBQUM3QyxNQUFNQyxRQUFRRCxTQUFTQyxLQUF2QjtBQUNBLFNBQU87QUFDTGQsZ0JBQVksZ0NBQWdCVixLQUFoQixFQUF1QndCLEtBQXZCLENBRFA7QUFFTEQ7QUFGSyxHQUFQO0FBSUQsQ0FORDs7QUFRQSxJQUFNRSxxQkFBcUIsU0FBckJBLGtCQUFxQixXQUFZO0FBQ3JDLFNBQU8sMERBQXVCNUIsWUFBdkIsR0FBc0M2QixRQUF0QyxDQUFQO0FBQ0QsQ0FGRDs7ZUFJZSx5QkFBU0osZUFBVCxFQUEwQkcsa0JBQTFCLEVBQWdEM0IsaUJBQWhELEM7Ozs7Ozs7Ozs7O2dDQTFFVEEsaUI7O2dDQThEQXdCLGU7O2dDQVFBRyxrQiIsImZpbGUiOiIwLjM1Y2NmMDkzYjg0MmNkYjFlYTlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJ2FudGQnO1xuXG5pbXBvcnQgdGFibGVDb2x1bW5zIGZyb20gJ2NvbnN0YW50cy90YWJsZUNvbHVtbnMnO1xuaW1wb3J0IHN1cHBsZW1lbnRhbFRhYmxlcyBmcm9tICdjb25zdGFudHMvc3VwcGxlbWVudGFsVGFibGVzJztcblxuaW1wb3J0IHsgc2VsZWN0VGFibGVEYXRhIH0gZnJvbSAncmVkdWNlcnMvc2VsZWN0b3JzJztcbmltcG9ydCAqIGFzIFRhYmxlQWN0aW9ucyBmcm9tICdhY3Rpb25zL3RhYmxlQWN0aW9ucyc7XG5cblxuY2xhc3MgU3VwcGxlbWVudGFsVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG4gICAgc3VwZXIoIHByb3BzICk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29sdW1uczogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZUNvbHVtbnMgPSAoIGNvbHVtbnMgKSA9PiB7XG4gICAgY29uc3QgY29scyA9IGNvbHVtbnMubWFwKCBjb2wgPT4ge1xuICAgICAgcmV0dXJuICgge1xuICAgICAgICB0aXRsZTogY29sLnRpdGxlLFxuICAgICAgICBkYXRhSW5kZXg6IGNvbC5kYXRhSW5kZXgsXG4gICAgICAgIHdpZHRoOiBjb2wud2lkdGggfHwgMTIwLFxuICAgICAgfSlcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtjb2x1bW5zOiBjb2xzfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2x1bW5zLCBzZWxlY3RlZFJvd0tleXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHsgZGF0YVNvdXJjZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHJvd0NsYXNzTmFtZSA9IChyZWNvcmQpID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMocmVjb3JkLmtleSkpIHtcbiAgICAgICAgcmV0dXJuICdyb3ctc2VsZWN0ZWQnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzY3JvbGxYID0gMDtcbiAgICBpZiAoY29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICBjb2x1bW5zLm1hcChjb2wgPT4ge1xuICAgICAgICBzY3JvbGxYICs9IGNvbC53aWR0aDtcbiAgICAgIH0pXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdXBwbGVtZW50YWwtdGFibGVcIj5cbiAgICAgICAgPGRpdj5zdWFzZGZhc2RmYXNkZmFzZGZhc3A8L2Rpdj5cbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XG4gICAgICAgICAgc2Nyb2xsPXt7IHg6IHNjcm9sbFggfX1cbiAgICAgICAgICBvblJvdz17KHJlY29yZCkgPT5cbiAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6IChlKSA9PiB0aGlzLmhhbmRsZVJvd0NsaWNrKGUsIHJlY29yZClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIHJvd0NsYXNzTmFtZT17cm93Q2xhc3NOYW1lfVxuICAgICAgICAgIGJvcmRlcmVkPXt0cnVlfVxuICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2UgPyBkYXRhU291cmNlIDogW10gfVxuICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnMgPyBjb2x1bW5zIDogW119XG4gICAgICAgIC8+XG4gICAgICAgIGJsYVxuICAgICAgPC9kaXY+ICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCBzdGF0ZSwgb3duUHJvcHMgKSA9PiB7XG4gIGNvbnN0IHRhYmxlID0gb3duUHJvcHMudGFibGU7XG4gIHJldHVybiB7XG4gICAgZGF0YVNvdXJjZTogc2VsZWN0VGFibGVEYXRhKHN0YXRlLCB0YWJsZSksXG4gICAgb3duUHJvcHNcbiAgfVxufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsuLi5UYWJsZUFjdGlvbnN9LCBkaXNwYXRjaCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyApKCBTdXBwbGVtZW50YWxUYWJsZSApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVGFibGVzL1N1cHBsZW1lbnRhbFRhYmxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==