import React from 'react'
import './style.sass'
import HelloKitty from './images/hellokitty.png'
import Egg from './images/egg.png'
import Maru from './images/bmaru.png'
import Frog from './images/keropi.png'
import LTS from './images/lts.png'
import Dog from './images/pochacho.png'

class Characters extends React.Component {

  render () {
    return (
      <div className="CharacterBlock">
        <h2>Characters</h2>
        <div className="CharacterImages">
          <img src={HelloKitty} />
          <img src={Egg} />
          <img src={Frog} />
          <img src={Maru} />
          <img src={LTS} />
          <img src={Dog} />
        </div>
      </div>
    )
  }
}

export default Characters
