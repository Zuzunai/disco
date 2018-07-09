import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PeopleIn from './PeopleIn';
import * as actions from './actions';

function mapStateToProps(state) {
  return {
    peopleIn: state.peopleIn
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleIn);