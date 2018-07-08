const lastIdFinder = currentState => {
  let biggerIdInTheArray = 0
  for (let person of currentState.people) {
    if (person.id > biggerIdInTheArray) biggerIdInTheArray = person.id
  }
  return biggerIdInTheArray
}

export default lastIdFinder