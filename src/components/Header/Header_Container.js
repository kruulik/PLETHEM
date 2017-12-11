import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import AppHeader from './app_header';

import { requestTestState } from 'actions/testActions';

const mapStateToProps = ({ state }) => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestTestState: () => dispatch(requestTestState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
