import React, { Component } from 'react';

import { Wrapper, Title, PeopleQueue } from './Queue_styles';

class Queue extends Component {
  state = {     
    inputValue: ''
  }
  
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

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }
  
  render() {
    const { addPersonToTheQueueRequested } = this.props;

    return (
      <Wrapper>
        <Title>Cola</Title>
        <PeopleQueue>
          {this.renderQueue()}
        </PeopleQueue>
        <input 
          value={this.state.inputValue}
          onChange={this.onInputChange}
        />
        <button onClick={() => addPersonToTheQueueRequested(this.state.inputValue)} >Add to queue</button>
      </Wrapper>
    )
  }
}

export default Queue;