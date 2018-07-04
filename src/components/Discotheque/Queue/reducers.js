import {state, deletePersonOnTheQueue, addPerson} from './QueueModel'
import { PERSON_ON_THE_QUEUE_DELETE_REQUESTED, TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED, ADD_PERSON_TO_THE_QUEUE_REQUESTED} from './actions'

const initialState = state()

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case PERSON_ON_THE_QUEUE_DELETE_REQUESTED:
      return deletePersonOnTheQueue(state, action.payload)
    
    case TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED:
      return deletePersonOnTheQueue(state, action.payload.id)

    case ADD_PERSON_TO_THE_QUEUE_REQUESTED:
      return addPerson(state, action.payload)
      
    default:
      return state;
  }
}