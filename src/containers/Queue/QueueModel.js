import lastIdFinder from '../../infrastructure/lastIdFinder'

export const state = () => ({
  people: [
    {id: 1, name: 'Oscar', dressStyle: 'DRESSED_INFORMALLY'},
    {id: 2, name: 'Victor', dressStyle: 'DRESSED_FORMALLY'},
    {id: 3, name: 'Rafa', dressStyle: 'DRESSED_INFORMALLY'},
    {id: 4, name: 'Alex', dressStyle: 'DRESSED_FORMALLY'},
    {id: 5, name: 'Pablo', dressStyle: 'DRESSED_FORMALLY'}
  ],
  addInputPerson: ''
})

export const deletePersonOnTheQueue = (currentState, idPersonToDelete) =>
  ({...currentState, people: currentState.people.filter(person => person.id !== idPersonToDelete)})

export const onInputAddPersonChanged = (currentState, inputEvent) => 
  ({...currentState, addInputPerson: inputEvent})

export const addPerson = currentState => {
  const newID = lastIdFinder(currentState)
  const person = {id: newID + 1, name: currentState.addInputPerson, dressStyle: _randomDressCode()}
  currentState.addInputPerson = ''
  return ({...currentState, people: currentState.people.concat([person])})
}

const _randomDressCode = () => {
  const dressCode = ['DRESSED_FORMALLY', 'DRESSED_INFORMALLY']
  const randomNumber = Math.floor(Math.random() * 2)
  return dressCode[randomNumber]
}