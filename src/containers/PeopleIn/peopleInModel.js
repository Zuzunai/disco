import lastIdFinder from '../../infrastructure/lastIdFinder'

export const state = () => ({
  people: [
    { id: 1, name: "Manager", dressStyle: "DRESSED_INFORMALLY" },
    { id: 2, name: "BigBoss", dressStyle: "DRESSED_FORMALLY" },
    { id: 3, name: "SuperManager", dressStyle: "DRESSED_INFORMALLY" },
    { id: 4, name: "HyperManager", dressStyle: "DRESSED_FORMALLY"},
    { id: 5, name: "Lider de la liga Pokemon", dressStyle: "DRESSED_FORMALLY"}
  ]
})

export const deletePersonInTheDiscotheque = (currentState, idPersonToDelete) =>
  ({...currentState, people: currentState.people.filter(person => person.id !== idPersonToDelete)})

export const addPersonInTheDiscotheque = (currentState, person) => {
  const newID = lastIdFinder(currentState)
  const personWithIDFixed = {
    ...person,
    id: newID + 1
  }
  return {...currentState, people: currentState.people.concat([personWithIDFixed])}
}
