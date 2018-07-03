import React, { Component } from 'react';

import { Wrapper, Title, PeopleQueue } from './Queue_styles';

class Queue extends Component {
  state = {     
    inputValue: ''
  }

  // transferToDisco(index) {
  //   // TODO: Move Person from the Queue to the Discotheque
  // }

  renderQueue() {
    const { people, deletePerson, checkDressCode, transfer } = this.props
    return people.map((person, index) => {
      return (
        <li key={person.id} >
          <span>{person.name}</span>
          <button onClick={() => deletePerson(person.id)} >Sacar de la cola</button>
          <button onClick={() => transfer(person.id)} >Acceso</button>
        </li>
      )
    })
  }

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value })
    console.log(this.state.inputValue)
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