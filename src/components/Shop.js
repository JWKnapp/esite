import React, { Component } from 'react';
import ShopListings from './ShopListings';
import Footer from './Footer';
import axios from 'axios';

class Shop extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
    this.state = {
      wallet: 7200,
      inventory: [],
      shopItems: [],
      itemIndexClicked: null,
    };
  }

  handleClick(evt) {
    console.log('this was clicked', evt.target.dataset.id);
    this.setState({ itemIndexClicked: evt.target.dataset.id });
    console.log('this is the state of the inventory', this.state);
    console.log(
      'this should show the right shop item',
      this.state.shopItems[evt.target.dataset.id]
    );
  }

  handleBuy(evt) {
    let wallet = this.state.wallet;
    let currItem = this.state.shopItems[this.state.itemIndexClicked];
    wallet = wallet - currItem.price;
    this.setState({
      wallet,
    });

    let inventory = this.state.inventory;
    inventory = inventory.concat(currItem.itemName);
    this.setState({
      inventory,
    });
    console.log('this is your inventory', this.inventory);
    console.log('this is your wallet', this.wallet);
    console.log(currItem.price);
  }

  componentWillMount() {
    axios
      .get('http://172.17.21.36:8080/api/stocks')
      .then(res => {
        const items = res.data;

        this.setState({
          shopItems: items.sort(function(a, b) {
            return a.id - b.id;
          }),
        });
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    let currentItem = this.state.shopItems[this.state.itemIndexClicked];
    return (
      <div className="page_container">
        <div className="main_window">
          <div className="shop_listings">
            <ul className="item_names">
              {this.state.shopItems.map(item => (
                <li
                  key={item.id}
                  onClick={this.handleClick}
                  data-id={item.id - 1}
                >
                  <img src={item.imgUrl} width="25" /> {item.itemName}
                </li>
              ))}
            </ul>
            <ul className="prices">
              {this.state.shopItems.map(item => (
                <li key={item.id}>:{item.price}</li>
              ))}
            </ul>
          </div>
          <div className="stock">
            <ul className="gold">
              <li className="amount">{this.state.wallet}</li>
              <li className="money_type">Gold</li>
            </ul>
            <ShopListings mainState={this.state} />
          </div>
        </div>
        {/* <div className="footer"> */}
        <Footer mainState={this.state} handleBuy={this.handleBuy} />
        {/* </div> */}
      </div>
    );
  }
}

export default Shop;
