export const state = () => ({
  people: [
    {id: 1, name: 'Oscar', dressStyle: 'DRESSED_INFORMALLY'},
    {id: 2, name: 'Victor', dressStyle: 'DRESSED_FORMALLY'},
    {id: 3, name: 'Rafa', dressStyle: 'DRESSED_INFORMALLY'},
    {id: 4, name: 'Alex', dressStyle: 'DRESSED_FORMALLY'},
    {id: 5, name: 'Pablo', dressStyle: 'DRESSED_FORMALLY'}
  ],
  addInputPerson: '',
  maxPeople: 300
})

export const deletePersonOnTheQueue = (currentState, idPersonToDelete) =>
  ({...currentState, people: currentState.people.filter(person => person.id !== idPersonToDelete)})

export const addPerson = (name) => {
  const lastPersonIdOnTheQueue = state().people[state().people.length - 1].id
  state().people = [
    ...state().people,
    {id: lastPersonIdOnTheQueue + 1, name: name, dressStyle: randomDressCode()}
  ]
}

export const randomDressCode = () => {
  const dressCode = ['DRESSED_FORMALLY', 'DRESSED_INFORMALLY']
  const randomNumber = Math.floor(Math.random() * 2)
  return dressCode[randomNumber]
}