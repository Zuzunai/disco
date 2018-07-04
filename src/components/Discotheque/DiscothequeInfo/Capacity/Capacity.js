import React from 'react'
import { Wrapper } from './Capacity_styles'

const Capacity = (props) => {
  const { maxCapacity, actualCapacity } = props

  return (
    <Wrapper>
      <p>Aforo máximo: {maxCapacity}</p>
      <p>Aforo actual: {actualCapacity}</p>
    </Wrapper>
  )
}

export default Capacity