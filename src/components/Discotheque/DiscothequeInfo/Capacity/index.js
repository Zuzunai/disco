import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Capacity from './Capacity';
import * as actions from './actions';

function mapStateToProps(state) {
  return {
    capacity: state.capacity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Capacity);