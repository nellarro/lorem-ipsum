import React from 'react'
import './style.sass'
import Navigation from './Navigation'

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Navigation />
        <div className="HeaderImg">
          <div className="Header" />
        </div>
      </div>
    )
  }
}

export default App
