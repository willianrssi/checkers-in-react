import React, { Component } from 'react'
import styled from 'styled-components'

import Row from './row'

class Board extends Component {
  constructor () {
    super()
    const INITIAL_BOARD = [
      ['B', 0, 'B', 0, 'B', 0, 'B', 0],
      [0, 'B', 0, 'B', 0, 'B', 0, 'B'],
      ['B', 0, 'B', 0, 'B', 0, 'B', 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 'R', 0, 'R', 0, 'R', 0, 'R'],
      ['R', 0, 'R', 0, 'R', 0, 'R', 0],
      [0, 'R', 0, 'R', 0, 'R', 0, 'R']
    ]
    this.state = {
      board: INITIAL_BOARD
    }
  }
  render () {
    return (
      <Container>
        {this.state.board.map((row, index) => <Row squares={row} key={index} rowNumber={index} />)}
      </Container>
    )
  }
}

export default Board

const Container = styled.div`
  display: flex;
  flex-direction: column;
 `
