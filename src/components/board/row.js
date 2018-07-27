import React from 'react'
import Square from './square'

import styled from 'styled-components'

const Row = ({squares, rowNumber}) => (
  <Container>
    {squares.map((square, index) => <Square key={index} square={square} colNumber={index} rowNumber={rowNumber} />)}
  </Container>
)

export default Row

const Container = styled.div`
  display: flex;
  flex-direction: row;
 `
