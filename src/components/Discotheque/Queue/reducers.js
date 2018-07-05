import { state, deletePersonOnTheQueue, addPerson, onInputAddPersonChanged } from './QueueModel'
import { PERSON_ON_THE_QUEUE_DELETE_REQUESTED, TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED, ADD_PERSON_TO_THE_QUEUE_REQUESTED, ADD_PERSONS_INPUT_CHANGED} from './actions'

const initialState = state()

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case PERSON_ON_THE_QUEUE_DELETE_REQUESTED:
      return deletePersonOnTheQueue(state, action.payload)
    
    case TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED:
      return deletePersonOnTheQueue(state, action.payload.id)

    case ADD_PERSONS_INPUT_CHANGED:
      return onInputAddPersonChanged(state, action.payload)

    case ADD_PERSON_TO_THE_QUEUE_REQUESTED:
      return addPerson(state)
      
    default:
      return state;
  }
}