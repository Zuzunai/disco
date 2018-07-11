import { state, incrementCapacity, decrementCapacity, initializeActualCapacity } from './capacityModel'
import { TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED } from '../Queue/actions'
import { PERSON_ON_THE_DISCO_DELETED_REQUESTED, PEOPLE_IN_INITIAL_ENTRY_COMPLETED } from '../PeopleIn/actions'
import { ALLOW_TO_PASS, DO_NOT_ALLOW_TO_PASS } from './actions'

const initialState = state()

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED:
      if (state.actualCapacity < state.maxCapacity) {
        action.asyncDispatch({type: ALLOW_TO_PASS, payload: action.payload})
      } else {
        action.asyncDispatch({type: DO_NOT_ALLOW_TO_PASS, payload: action.payload})
      }
    return state
    
    case ALLOW_TO_PASS:
      return incrementCapacity(state)
      
    case PERSON_ON_THE_DISCO_DELETED_REQUESTED:
      return decrementCapacity(state)

    case PEOPLE_IN_INITIAL_ENTRY_COMPLETED:
      return initializeActualCapacity(state, action.payload)

    default:
      return state;
  }
}