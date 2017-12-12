export const CHANGE_DATASET = 'CHANGE_DATASET';

export const setDataset = (dataset) => {
  debugger
  return ({
    type: CHANGE_DATASET,
    dataset
  })
}
