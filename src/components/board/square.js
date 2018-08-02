import React from 'react'
import styled from 'styled-components'
import Piece from './piece'

const Square = ({piece, colNumber, rowNumber, handleSelectPiece, possiblePlay, handleMovePiece}) => (
  <Container calcBackground={colNumber + rowNumber} possiblePlay={possiblePlay} onClick={() => handleMovePiece(rowNumber, colNumber)} >
    {(!!piece && piece !== 'P') && <Piece color={piece} handleSelectPiece={() => handleSelectPiece(rowNumber, colNumber)} />}
  </Container>
)

export default Square

const Container = styled.div`
  align-items: center;
  background-color: ${props => props.possiblePlay ? '#6A6AFF' : (props.calcBackground) % 2 === 0 ? '#DDDDDD' : '#FFF'}
  border: 1px solid #DDD;
  cursor: ${props => props.possiblePlay ? 'pointer' : 'default'}
  display: flex;
  justify-content: center;
  margin: 1px;
  height: 75px;
  width: 75px;
 `
