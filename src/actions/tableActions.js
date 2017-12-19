export const UPDATE_CELL = 'UPDATE_CELL';
export const RECEIVE_TABLE = 'RECEIVE_TABLE';
export const RECEIVE_ROW = 'RECEIVE_ROW';

export const updateCell = () => {
  debugger
  return ({
    type: UPDATE_CELL,

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


// sample state for table data
// tables: {
//   oganisms: ['dataID1', 'dataID2', 'dataID3'],
//   exposure: ['dataID4', 'dataID5', 'dataID6'],
// }
//
// tableData: {
//   dataID1: {
//     organismName: 'blabla',
//     species: 'bla',
//     ...
//   }
// }
