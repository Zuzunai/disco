import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Queue from './Queue';
import * as actions from './actions';

function mapStateToProps(state) {
  return {
    peopleQueue: state.peopleQueue
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Queue);