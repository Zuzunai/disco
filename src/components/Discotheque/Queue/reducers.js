import { state, deletePersonOnTheQueue, addPerson, onInputAddPersonChanged } from './QueueModel'
import { PERSON_ON_THE_QUEUE_DELETE_REQUESTED, ADD_PERSON_TO_THE_QUEUE_REQUESTED, ADD_PERSONS_INPUT_CHANGED} from './actions'
import { ALLOW_TO_PASS, DO_NOT_ALLOW_TO_PASS } from '../DiscothequeInfo/Capacity/actions'

const initialState = state()

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case PERSON_ON_THE_QUEUE_DELETE_REQUESTED:
      return deletePersonOnTheQueue(state, action.payload)
    
    case ALLOW_TO_PASS:
      return deletePersonOnTheQueue(state, action.payload.id)

    case ADD_PERSONS_INPUT_CHANGED:
      return onInputAddPersonChanged(state, action.payload)

    case ADD_PERSON_TO_THE_QUEUE_REQUESTED:
      return addPerson(state)
      
    default:
      return state;
  }
}