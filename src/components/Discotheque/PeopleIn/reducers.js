import { state, deletePersonInTheDiscotheque, addPersonInTheDiscotheque} from './peopleInModel'
import { PERSON_ON_THE_DISCO_DELETED_REQUESTED } from './actions'
import { TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED } from '../Queue/actions'

const initialState = state()

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case PERSON_ON_THE_DISCO_DELETED_REQUESTED:
      return deletePersonInTheDiscotheque(state, action.payload)

    case TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED:
      return addPersonInTheDiscotheque(state, action.payload)

    default:
      return state;
  }
}