import React from 'react'
import styled from 'styled-components'

const Square = ({square, colNumber, rowNumber}) => (
  <Container calcBackground={colNumber + rowNumber}>
    {!!square && <Piece color={square} />}
  </Container>
)

export default Square

const Container = styled.div`
  align-items: center;
  background-color: ${props => (props.calcBackground) % 2 === 0 ? '#DDDDDD' : '#FFF'}
  border: 1px solid #DDD;
  display: flex;
  justify-content: center;
  margin: 1px;
  height: 75px;
  width: 75px;
 `

const color = {
  'B': '#727272',
  'R': '#E26B6B'
}

const Piece = styled.div`
  background-color: ${props => color[props.color]};
  border-radius: 50%;
  height: 80%;
  width: 80%;
`
