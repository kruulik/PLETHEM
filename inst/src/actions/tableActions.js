
export const UPDATE_CELL = 'UPDATE_CELL';
export const RECEIVE_TABLE = 'RECEIVE_TABLE';
export const RECEIVE_ROW = 'RECEIVE_ROW';
export const REMOVE_ROWS = 'REMOVE_ROWS';
export const SELECT_ROW = 'SELECT_ROW';
export const RECEIVE_COMPOUNDS = 'RECEIVE_COMPOUNDS';
export const RECEIVE_PHYS = 'RECEIVE_PHYS';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';

import { generateConcPlotData } from 'reducers/transpose';


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

export const addRow = (table, defaults={}) => ({
  type: RECEIVE_ROW,
  table,
  defaults
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
  return {
    type: RECEIVE_COMPOUNDS,
    compounds,
    errors
  }
}

export const receiveDefaultPhys = (table, key, {details, errors}) => {
  return {
    type: RECEIVE_PHYS,
    table,
    key,
    details,
    errors
  }
}

export const testDefaultPhys = (table, key ) => {
  const details = {
    age: {
      key: `${key}_a`,
      parameter: 'Age',
      value: 25,
      dist: 'Fixed',
      mean: 75,
      variability: 0,
      min: 75,
      max: 75
    },
    bodyWeight: {
      key: `${key}_0`,
      parameter: 'Body Weight',
      value: 75,
      dist: 'Fixed',
      mean: 75,
      variability: 0,
      min: 75,
      max: 75
    },
    bmi: {
      key: `${key}_1`,
      parameter: 'BMI',
      value: 25,
      dist: 'Fixed',
      mean: 25,
      variability: 0,
      min: 25,
      max: 25
    },
    bsa: {
      key: `${key}_2`,
      parameter: 'BSI',
      value: 1.7,
      dist: 'Fixed',
      mean: 1.7,
      variability: 0,
      min: 1.7,
      max: 1.7
    },
    cardOut: {
      key: `${key}_3`,
      parameter: 'Cardiac Output',
      value: 1.7,
      dist: 'Fixed',
      mean: 1.7,
      variability: 0,
      min: 1.7,
      max: 1.7
    },
    LMPSF: {
      key: `${key}_4`,
      parameter: 'Liver Microsomal Protein Scaling Factor',
      value: 1.7,
      dist: 'Fixed',
      mean: 1.7,
      variability: 0,
      min: 1.7,
      max: 1.7
    }
  };
  return {
    type: RECEIVE_PHYS,
    table,
    key,
    details
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

export const getDefaultPhysiologicalData = (data) => dispatch => {
  const req = window.ocpu.rpc("getDefaultPhysiologicalData", data, (details) =>  dispatch(receiveDefaultPhys({details: details}) )
);
  req.fail(
    req => dispatch(receiveDefaultPhys({errors: req.responseText}))
  )
};

// export const getDefaultPhysiologicalData = (table, key) => {
//   (details) dispatch(receiveDefaultPhys(table, key, {details: details}))
// }

export const receiveTestResults = (output) => {
  const transposed = generateConcPlotData(JSON.parse(output.outputs)[0]);
  return {
    type: RECEIVE_RESULTS,
    data: transposed.data,
    rows: transposed.rows
  }
}

export const runTestScenario = (args) => dispatch => {
  const req = window.ocpu.rpc("runSingleScenario", args,
  (output) => dispatch(receiveTestResults({outputs: output})))
}
