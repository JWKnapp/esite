import React, { Component } from 'react';
import Inventory from './Inventory';

class Shop extends Component {
  render() {
    return (
      <div className="main_window">
        <div>
          <ul className="shop_listings">
            <li>
              <img src="uncertainty.png" width="30" /> AboutMe
            </li>
            <li>
              <img src="files.png" width="30" /> Resume
            </li>
            <li>
              <img src="full-folder.png" width="30" /> Portfolio
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jehoshuah-knapp">
                <img src="whitelogo.png" width="30" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/JWKnapp">
                <img src="github-logo-1.png" width="30" /> Github
              </a>
            </li>
            <li>
              <a href="./contact.html">
                <img src="mailbox.png" width="30" /> ContactMe
              </a>
            </li>
          </ul>
        </div>
        <Inventory />
      </div>
    );
  }
}

export default Shop;
