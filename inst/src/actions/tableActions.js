export const UPDATE_CELL = 'UPDATE_CELL';
export const RECEIVE_TABLE = 'RECEIVE_TABLE';
export const RECEIVE_ROW = 'RECEIVE_ROW';

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
