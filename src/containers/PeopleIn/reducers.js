import { state, deletePersonInTheDiscotheque, addPersonInTheDiscotheque} from './peopleInModel'
import { PERSON_ON_THE_DISCO_DELETED_REQUESTED } from './actions'
import { ALLOW_TO_PASS, DO_NOT_ALLOW_TO_PASS } from '../Capacity/actions'

const initialState = state()

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case PERSON_ON_THE_DISCO_DELETED_REQUESTED:
      // action.asyncDispatch({type: ALLOW_TO_PASS, payload: action.payload})
      return deletePersonInTheDiscotheque(state, action.payload)
    
    case ALLOW_TO_PASS:
      return addPersonInTheDiscotheque(state, action.payload)

    default:
      return state;
  }
}