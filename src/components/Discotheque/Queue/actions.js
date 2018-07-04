export const PERSON_ON_THE_QUEUE_DELETE_REQUESTED = 'PERSON_ON_THE_QUEUE_DELETE_REQUESTED'
export const TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED = 'TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED'
export const ADD_PERSON_TO_THE_QUEUE_REQUESTED = 'ADD_PERSON_TO_THE_QUEUE_REQUESTED'

export const personOnTheQueueDeleteRequested = payload => ({type: PERSON_ON_THE_QUEUE_DELETE_REQUESTED, payload})
export const transferPersonToTheDiscothequeRequested = payload => ({type: TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED, payload})
export const addPersonToTheQueueRequested = payload => ({type: ADD_PERSON_TO_THE_QUEUE_REQUESTED, payload})