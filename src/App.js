import React from 'react'
import './style.sass'
import Navigation from './Navigation'
import Logo from './Logo'
import Ads from './Ads'
import Characters from './Characters'

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Ads />
        <Characters />
      </div>
    )
  }
}

export default App
