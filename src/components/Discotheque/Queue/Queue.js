import React, { Component } from 'react';

import { Wrapper, Title, PeopleQueue } from './Queue_styles';

class Queue extends Component {
  state = {     
    inputValue: ''
  }

  renderQueue() {
    const { people, deletePerson, transfer } = this.props
    return people.map((person) => {
      return (
        <li key={person.id} >
          <span>{person.name}</span>
          <div>
            <button onClick={() => deletePerson(person.id)} >X</button>
            <button onClick={() => transfer(person.id)} >-></button>
          </div>
        </li>
      )
    })
  }

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }
  
  render() {
    const { addPerson } = this.props;

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
        <button onClick={() => addPerson(this.state.inputValue)} >Add to queue</button>
      </Wrapper>
    )
  }
}

export default Queue;