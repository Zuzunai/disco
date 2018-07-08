export const PERSON_ON_THE_DISCO_DELETED_REQUESTED = 'PERSON_ON_THE_DISCO_DELETED_REQUESTED'
export const PEOPLE_IN_INITIAL_ENTRY_COMPLETED = 'PEOPLE_IN_INITIAL_ENTRY_COMPLETED'

export const personInTheDiscoDeleteRequested = payload => ({type: PERSON_ON_THE_DISCO_DELETED_REQUESTED, payload})
export const peopleInInitialEntryCompleted = payload => ({type: PEOPLE_IN_INITIAL_ENTRY_COMPLETED, payload})