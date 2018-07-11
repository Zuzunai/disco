import {combineReducers} from 'redux'
import queueReducers from '../containers/Queue/reducers'
import peopleInReducers from '../containers/PeopleIn/reducers'
import capacityReducers from '../containers/Capacity/reducers'

export default combineReducers({
  peopleQueue: queueReducers,
  peopleIn: peopleInReducers,
  capacity: capacityReducers
});