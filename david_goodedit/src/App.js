import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AppContainer from './AppContainer'
import DavidGoodenough from './components/DavidGoodenough'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={AppContainer} />
      <Route path='/Mister-Goodenough' component={DavidGoodenough} />
    </Switch>
  )
}

export default App
