import * as APIUtil from 'api/table_api';

export const UPDATE_CELL = 'UPDATE_CELL';
export const RECEIVE_TABLE = 'RECEIVE_TABLE';
export const RECEIVE_ROW = 'RECEIVE_ROW';
export const REMOVE_ROWS = 'REMOVE_ROWS';
export const SELECT_ROW = 'SELECT_ROW';
export const RECEIVE_COMPOUNDS = 'RECEIVE_COMPOUNDS';

export const updateCell = (row, value, table, column) => {

  return ({
    type: UPDATE_CELL,
    row,
    value,
    table,
    column
  })
}

export const createTable = (tableName) => ({
  type: RECEIVE_TABLE,
  tableName
})

export const addRow = (table, rowID) => ({
  type: RECEIVE_ROW,
  table,
  rowID
})

export const removeRows = (table, rowIDs) => ({
  type: REMOVE_ROWS,
  table,
  rowIDs
})

export const selectSingleRow = (table, rowID) => ({
  type: SELECT_ROW,
  table,
  rowID
})

export const receiveCompounds = ({compounds, errors}) => {
  debugger
  return {
    type: RECEIVE_COMPOUNDS,
    compounds,
    errors
    }
}

export const requestCompounds = () => dispatch => {
  const req = window.ocpu.rpc("getIndusChemFateCompoundData", null,
  (compounds) => dispatch(receiveCompounds({compounds: compounds}))
);
  req.fail(
    (req) => dispatch(receiveCompounds({errors: req.responseText}))
  )
};
