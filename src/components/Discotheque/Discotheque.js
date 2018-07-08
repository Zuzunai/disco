import React, { Component } from 'react';
import DiscothequeInfo from './DiscothequeInfo/DiscothequeInfo'
import Queue from './Queue'
import PeopleIn from './PeopleIn'
import { Wrapper } from './Discotheque_styles'

class Discotheque extends Component {
  
  render() {
    return (
      <Wrapper>
        <DiscothequeInfo />
        <Queue />
        <PeopleIn />
      </Wrapper>
    )
  }
}

export default Discotheque;