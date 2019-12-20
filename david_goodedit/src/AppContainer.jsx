import React from 'react'
import './App.css'
import InputArea from './components/InputArea'
import Home from './components/Home'
import Tutorial from './components/Tutorial'

function AppContainer() {
  return (
    <div className='App'>
        <Home />
        <InputArea />
        <Tutorial />
    </div>
  )
}

export default AppContainer