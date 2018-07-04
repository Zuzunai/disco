import {combineReducers} from 'redux'
import queueReducers from '../components/Discotheque/Queue/reducers'

export default combineReducers({
  peopleQueue: queueReducers
});