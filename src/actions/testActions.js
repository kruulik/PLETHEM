export const TEST_ACTION = 'TEST_ACTION';

export const receiveTestState = (data) => {
  return ({
    type: TEST_ACTION,
    data
  })
}

export const requestTestState = data => dispatch => {
  return dispatch(receiveTestState(data));
}
