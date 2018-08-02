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
      board: INITIAL_BOARD,
      activePlayer: 'R',
      selectedPiece: [],
      possiblePlays: []
    }
    this.handleSelectPiece = this.handleSelectPiece.bind(this)
    this.handleMovePiece = this.handleMovePiece.bind(this)
  }

  handleSelectPiece (row, column) {
    let board = this.state.board.slice()
    if (board[row][column] === this.state.activePlayer) {
      // Verify if has selected piece
      !this.state.selectedPiece.length ? this.setSelectedPiece(board, row, column) : this.changeSelectedPiece(board, row, column)
    }
  }

  async changeSelectedPiece (board, row, column) {
    let prevSelectedPiece = this.state.selectedPiece.slice()
    board[prevSelectedPiece[0]][prevSelectedPiece[1]] = this.state.activePlayer
    board[row][column] = 'S'
    await this.setState({board, selectedPiece: [row, column]})
    this.changePossiblePlays()
  }

  async setSelectedPiece (board, row, column) {
    board[row][column] = 'S'
    await this.setState({board, selectedPiece: [row, column]})
    this.showPossiblePlays()
  }

  async changePossiblePlays () {
    let prevPossiblePlays = this.state.possiblePlays.slice()
    let board = this.state.board.slice()
    prevPossiblePlays.forEach(position => {
      board[position[0]][position[1]] = 0
    })
    await this.setState({possiblePlays: []})
    this.showPossiblePlays()
  }

  showPossiblePlays () {
    let selectedPiece = this.state.selectedPiece.slice()
    let row = selectedPiece[0]
    let column = selectedPiece[1]
    let board = this.state.board.slice()
    let playerFactorRow = this.state.activePlayer === 'R' ? -1 : 1
    let possiblePlays = []

    if (column !== 0 && column !== 7) {
      if (board[row + playerFactorRow][column - 1] === 0) {
        board[row + playerFactorRow][column - 1] = 'P'
        possiblePlays.push([row + playerFactorRow, column - 1])
      }
      if (board[row + playerFactorRow][column + 1] === 0) {
        board[row + playerFactorRow][column + 1] = 'P'
        possiblePlays.push([row + playerFactorRow, column + 1])
      }
    }

    if (column === 0) {
      if (board[row + playerFactorRow][column + 1] === 0) {
        board[row + playerFactorRow][column + 1] = 'P'
        possiblePlays.push([row + playerFactorRow, column + 1])
      }
    }

    if (column === 7) {
      if (board[row + playerFactorRow][column - 1] === 0) {
        board[row + playerFactorRow][column - 1] = 'P'
        possiblePlays.push([row + playerFactorRow, column - 1])
      }
    }

    this.setState({board, possiblePlays})
  }

  handleMovePiece (row, column) {
    let board = this.state.board.slice()
    let activePlayer
    if (board[row][column] === 'P') {
      let selectedPiece = this.state.selectedPiece.slice()
      let possiblePlays = this.state.possiblePlays.slice()

      board[selectedPiece[0]][selectedPiece[1]] = 0
      selectedPiece = []

      possiblePlays.forEach(position => {
        board[position[0]][position[1]] = 0
      })
      possiblePlays = []

      board[row][column] = this.state.activePlayer

      activePlayer = this.state.activePlayer === 'R' ? 'B' : 'R'

      this.setState({board, selectedPiece, possiblePlays, activePlayer})
    }
  }

  clearSelectedPiece () {
  }

  render () {
    return (
      <Container>
        {this.state.board.map((row, index) => (
          <Row
            squares={row}
            key={index}
            rowNumber={index}
            handleSelectPiece={this.handleSelectPiece}
            handleMovePiece={this.handleMovePiece}
            />))}
      </Container>
    )
  }
}

export default Board

const Container = styled.div`
  display: flex;
  flex-direction: column;
 `
