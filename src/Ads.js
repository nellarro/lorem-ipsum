import React from 'react'
import './style.sass'
import AdOne from './images/ad-one.png'
import AdTwo from './images/ad-two.png'

class Ads extends React.Component {

  render () {
    return (
      <div className="AdsContainer">
        <div className="AdBox1">
          <div className="AdImage1">
            <img src={AdOne} />
          </div>
          <h3 className="Title1">Super cool skate decks
          </h3>
          <p className="Description1"> GIRL Skateboards x Sanrio & Chocolate Skateboard x Sanrio </p>
          <a href="#"> SHOP NOW&#8227;</a>
        </div>
        <div className="AdBox2">
          <div className="AdImage2">
            <img src={AdTwo} />
          </div>
          <h3 className="Title2">MINNA NO TĀBŌ
          </h3>
          <p className="Description2"> Supercute New Arrivals from your cheerful friend </p>
          <a href="#"> SHOP NOW&#8227;</a>
        </div>
      </div>
    )
  }
}

export default Ads
