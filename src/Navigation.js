import React from 'react'
import './style.sass'

class Navigation extends React.Component {

  render () {
    return (
      <div className="navBar">
        <nav>
          <ul>
            <li><a className="HomeLink" href="#">Home</a></li>
            <li><a className="ShopLink" href="#">Shop</a></li>
            <li><a className="SweetLink" href="#">Sweet Happy News</a></li>
            <li><a className="LocatorLink" href="#">Store Locator</a></li>
          </ul>
        </nav>
        <input className="SearchBar" type="text" placeholder="Enter a Keyword or Item #" />
      </div>
    )
  }
}

export default Navigation
