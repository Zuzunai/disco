import React, { Component } from 'react';

import { Wrapper, Title, PeopleQueue } from './Queue_styles';

class Queue extends Component {
  
  renderQueue() {
    const { peopleQueue, personOnTheQueueDeleteRequested, transferPersonToTheDiscothequeRequested } = this.props
    return peopleQueue.people.map(person => {
      return (
        <li key={person.id} >
          <span>{person.name}</span>
          <div>
            <button onClick={() => personOnTheQueueDeleteRequested(person.id)} >X</button>
            <button onClick={() => transferPersonToTheDiscothequeRequested(person)} >-></button>
          </div>
        </li>
      )
    })
  }
  
  render() {
    const { peopleQueue, addPersonInputChanged, addPersonToTheQueueRequested } = this.props

    return (
      <Wrapper>
        <Title>Cola</Title>
        <PeopleQueue>
          {this.renderQueue()}
        </PeopleQueue>
        <input 
          value={peopleQueue.addInputPerson}
          onChange={(event) => addPersonInputChanged(event.target.value)}
        />
        <button onClick={addPersonToTheQueueRequested} >Add to queue</button>
      </Wrapper>
    )
  }
}

export default Queue;