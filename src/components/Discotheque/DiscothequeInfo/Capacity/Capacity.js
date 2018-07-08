import React, { Component } from 'react'
import { Wrapper } from './Capacity_styles'

class Capacity extends Component {
  
  render() {
    const { capacity } = this.props

    return (
      <Wrapper>
        <p>Aforo máximo: {capacity.maxCapacity}</p>
        <p>Aforo actual: {capacity.actualCapacity}</p>
      </Wrapper>
    )
  }
}

export default Capacity