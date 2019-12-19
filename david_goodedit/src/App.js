import React from 'react'
import './App.css'
import InputArea from './components/InputArea'
import Home from './components/Home'
import Tutorial from './components/Tutorial'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      light: true
    }
    this.aziz = this.aziz.bind(this)
  }

  aziz() {
    this.setState({ light: !this.state.light })
  }
  render() {
    return (
      <div className={this.state.light === true ? 'App' : 'darkApp'}>
        <Home aziz={this.aziz} light={this.state.light} />
        <InputArea light={this.state.light} />
        <Tutorial />
      </div>
    )
  }
}

export default App
