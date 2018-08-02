import React from 'react'
import Square from './square'

import styled from 'styled-components'

const Row = ({squares, rowNumber, handleSelectPiece, handleMovePiece}) => (
  <Container>
    {squares.map((piece, index) => <Square key={index} piece={piece} colNumber={index} rowNumber={rowNumber} handleSelectPiece={handleSelectPiece} possiblePlay={piece === 'P'} handleMovePiece={handleMovePiece} />)}
  </Container>
)

export default Row

const Container = styled.div`
  display: flex;
  flex-direction: row;
 `
