export const state = () => ({
  maxCapacity: 7,
  actualCapacity: 7
})

export const incrementCapacity = currentState => 
  ({...currentState, actualCapacity: currentState.actualCapacity + 1})

export const decrementCapacity = currentState =>
  ({...currentState, actualCapacity: currentState.actualCapacity - 1})

export const initializeActualCapacity = (currentState, payload) => 
  ({...currentState, actualCapacity: 0 + payload})
