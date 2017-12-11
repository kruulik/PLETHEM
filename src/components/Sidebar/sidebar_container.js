import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Sidebar from './sidebar';

const mapStateToProps = ({ state }) => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, null)(Sidebar);
