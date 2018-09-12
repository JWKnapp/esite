import React, { Component } from 'react';
import Inventory from './Inventory';

class Shop extends Component {
  render() {
    return (
      <div className="main_window">
        <div className="shop_listings">
          <ul className="item_names">
            <li>
              <img src="uncertainty.png" width="25" /> About Me
            </li>
            <li>
              <img src="files.png" width="25" /> Resume
            </li>
            <li>
              <img src="full-folder.png" width="25" /> Portfolio
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jehoshuah-knapp">
                <img src="whitelogo.png" width="25" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/JWKnapp">
                <img src="github-logo-1.png" width="25" /> Github
              </a>
            </li>
            <li>
              <a href="./contact.html">
                <img src="mailbox.png" width="25" /> Contact Me
              </a>
            </li>
          </ul>
          <ul className="prices">
            <li className="price_list_item">: 800</li>
            <li className="price_list_item">: 800</li>
            <li className="price_list_item">: 800</li>
            <li className="price_list_item">: 800</li>
            <li className="price_list_item">: 800</li>
            <li className="price_list_item">: 800</li>
          </ul>
        </div>

        <Inventory />
      </div>
    );
  }
}

export default Shop;
