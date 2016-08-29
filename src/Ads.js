import React from 'react'
import './style.sass'

class Ads extends React.Component {

  render () {
    return (
      <div className="AdsContainer">
        <div className="AdBox1">
          <div className="AdImage1">
            <img className="FirstImage" src="src/images/ad-one.png" alt="AdOne" />
          </div>
          <h3 className="Title1">Super cool skate decks
          </h3>
          <p className="Description1"> GIRL Skateboards x Sanrio & Chocolate Skateboard x Sanrio </p>
          <a href="#"> SHOP NOW&#8227;</a>
        </div>
        <div className="AdBox2">
          <div className="AdImage2">
            <img className="SecondImage" src="src/images/ad-two.png" alt="AdTwo" />
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
