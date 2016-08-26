import React from 'react'
import './style.sass'
import Navigation from './Navigation'
import Logo from './Logo'

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Navigation />
        <Logo />
      </div>
    )
  }
}

export default App
