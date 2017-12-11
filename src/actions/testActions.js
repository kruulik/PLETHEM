export const TEST_ACTION = 'TEST_ACTION';

export const receiveTestState = (data) => {
  debugger
  return ({
    type: TEST_ACTION,
    data
  })
}

export const requestTestState = data => dispatch => {
  debugger
  return dispatch(receiveTestState(data));
}
