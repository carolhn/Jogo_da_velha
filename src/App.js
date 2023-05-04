import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Game from './pages/Game'

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route component={ Game } />
        </Switch>
      </main>
    )
  }
}
export default App