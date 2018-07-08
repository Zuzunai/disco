import {combineReducers} from 'redux'
import queueReducers from '../components/Discotheque/Queue/reducers'
import peopleInReducers from '../components/Discotheque/PeopleIn/reducers'
import capacityReducers from '../components/Discotheque/DiscothequeInfo/Capacity/reducers'

export default combineReducers({
  peopleQueue: queueReducers,
  peopleIn: peopleInReducers,
  capacity: capacityReducers
});