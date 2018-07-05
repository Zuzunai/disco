import React, { Component } from 'react';
import DiscothequeInfo from './DiscothequeInfo/DiscothequeInfo'
import Queue from './Queue'
import PeopleIn from './PeopleIn'
import { Wrapper } from './Discotheque_styles'

class Discotheque extends Component {
  state = {
    maxCapacity: 100,
    actualCapacity: 95
  }
  
  render() {
    return (
      <Wrapper>
        <DiscothequeInfo 
          maxCapacity={this.state.maxCapacity}
          actualCapacity={this.state.actualCapacity} 
        />
        <Queue />
        <PeopleIn />
      </Wrapper>
    )
  }
}

export default Discotheque;



  // addPersonOnTheQueue = (name) => {
  //   const lastPersonIdOnTheQueue = this.state.queueInitialPeople[this.state.queueInitialPeople.length - 1].id
  //   this.setState({
  //     queueInitialPeople: [
  //       ...this.state.queueInitialPeople,
  //       { id: lastPersonIdOnTheQueue + 1, name: name, dressStyle: this._randomDressCode() }
  //     ]
  //   })
  // }

  // _randomDressCode() {
  //   const dressCode = ["DRESSED_FORMALLY", "DRESSED_INFORMALLY"];
  //   const randomNumber = Math.floor(Math.random() * 2)
  //   return dressCode[randomNumber]
  // }