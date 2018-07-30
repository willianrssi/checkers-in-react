import React from 'react'
import styled from 'styled-components'

const Piece = ({ color, handleSelectPiece }) => (
  <Container color={color} onClick={() => handleSelectPiece()} />
)

const Container = styled.div`
background-color: ${props => color[props.color]};
border-radius: 50%;
cursor: pointer;
height: 80%;
margin: 10%;
width: 80%;
`

const color = {
  'B': '#727272',
  'R': '#E26B6B',
  'S': '#6A6AFF'
}

export default Piece
