import {combineReducers} from 'redux'
import queueReducers from '../components/Discotheque/Queue/reducers'
import peopleInReducers from '../components/Discotheque/PeopleIn/reducers'

export default combineReducers({
  peopleQueue: queueReducers,
  peopleIn: peopleInReducers
});