import React, { Component } from 'react';
import DiscothequeInfo from './DiscothequeInfo/DiscothequeInfo'
import Queue from './Queue/Queue'
import PeopleIn from './PeopleIn/PeopleIn'
import { Wrapper } from './Discotheque_styles'

class Discotheque extends Component {
  state = {
    maxCapacity: 100,
    actualCapacity: 95,
    queueInitialPeople: [
      { id: 1, name: "Oscar", dressStyle: "DRESSED_INFORMALLY" },
      { id: 2, name: "Victor", dressStyle: "DRESSED_FORMALLY" },
      { id: 3, name: "Rafa", dressStyle: "DRESSED_INFORMALLY" },
      { id: 4, name: "Alex", dressStyle: "DRESSED_FORMALLY"},
      { id: 5, name: "Pablo", dressStyle: "DRESSED_FORMALLY"}
    ],
    discothequeInitialPeople: [
      { id: 1, name: "Manager", dressStyle: "DRESSED_INFORMALLY" },
      { id: 2, name: "BigBoss", dressStyle: "DRESSED_FORMALLY" },
      { id: 3, name: "SuperManager", dressStyle: "DRESSED_INFORMALLY" },
      { id: 4, name: "HyperManager", dressStyle: "DRESSED_FORMALLY"},
      { id: 5, name: "Lider de la liga Pokemon", dressStyle: "DRESSED_FORMALLY"}
    ]
  }

  addPersonOnTheQueue = (name) => {
    const lastPersonIdOnTheQueue = this.state.queueInitialPeople[this.state.queueInitialPeople.length - 1].id
    this.setState({
      queueInitialPeople: [
        ...this.state.queueInitialPeople,
        { id: lastPersonIdOnTheQueue + 1, name: name, dressStyle: this._randomDressCode() }
      ]
    })
  }

  _randomDressCode() {
    const dressCode = ["DRESSED_FORMALLY", "DRESSED_INFORMALLY"];
    const randomNumber = Math.floor(Math.random() * 2)
    return dressCode[randomNumber]
  }

  deletePersonOnTheQueue = (idPersonToDelete) => {
    const updatedList = this.state.queueInitialPeople.filter(person => person.id !== idPersonToDelete)
    this.setState({ queueInitialPeople: updatedList })
  }

  transferToDiscotheque = (idPersonToTransfer) => {
    const personToTransfer = this.state.queueInitialPeople.filter(person => person.id === idPersonToTransfer)
    this.deletePersonOnTheQueue(idPersonToTransfer)

    // Consigo el id para modificarlo y se lo aplico a la persona a transferir
    personToTransfer[0].id = this.state.discothequeInitialPeople.length + 1

    const updatedListPeopleIn = this.state.discothequeInitialPeople.concat(personToTransfer)
    this.setState({ discothequeInitialPeople: updatedListPeopleIn, actualCapacity: this.state.maxCapacity - this.state.discothequeInitialPeople.length - 1 }) 
  }

  deletePersonInTheDiscotheque = (idPersonToDelete) => {
    const updatedList = this.state.discothequeInitialPeople.filter(person => person.id !== idPersonToDelete)
    this.setState({ discothequeInitialPeople: updatedList, actualCapacity: this.state.maxCapacity - this.state.discothequeInitialPeople.length + 1 })
  }
  
  render() {
    return (
      <Wrapper>
        <DiscothequeInfo 
          maxCapacity={this.state.maxCapacity}
          actualCapacity={this.state.actualCapacity} 
        />
        <Queue 
          people={this.state.queueInitialPeople} 
          addPerson={this.addPersonOnTheQueue}
          deletePerson={this.deletePersonOnTheQueue}
          checkDressCode={this.checkDressCode}
          transfer={this.transferToDiscotheque}
        />
        <PeopleIn 
          people={this.state.discothequeInitialPeople}
          deletePerson={this.deletePersonInTheDiscotheque}
        />
      </Wrapper>
    )
  }
}

export default Discotheque;