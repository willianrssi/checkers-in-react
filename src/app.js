'use strict'

import React, { PureComponent } from 'react'
import styled from 'styled-components'

import './css/style.css'
import Board from 'components/board'

class App extends PureComponent {
  render () {
    return (
      <Container>
        <Board />
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`

export default App
