export const UPDATE_CELL = 'UPDATE_CELL';

export const updateCell = ({dataIndex, value}) => ({
  type: UPDATE_CELL,
  dataIndex,
  value
})
