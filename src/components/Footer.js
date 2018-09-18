import React, { Component } from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    // this.handleBuy = this.handleBuy.bind(this);
  }

  // handleBuy(evt) {
  //   // let currentItem = this.props.mainState.shopItems[
  //   //   this.props.mainState.itemIndexClicked
  //   // ];
  //   // let wallet = this.props.mainState.wallet;
  //   // let inventory = this.props.mainState.inventory;
  //   this.setState({ wallet: wallet - currentItem.price });
  //   this.setState({ inventory: inventory.push(currentItem) });
  //   console.log('this is your inventory', inventory);
  //   console.log('this is your wallet', wallet);
  //   console.log(currentItem.price);
  // }

  render() {
    console.log('this is footer props', this.props);
    let currentItem = this.props.mainState.shopItems[
      this.props.mainState.itemIndexClicked
    ];
    let wallet = this.props.mainState.wallet;
    let inventory = this.props.mainState.inventory;
    console.log('the current item clicked', currentItem);
    if (currentItem) {
      return (
        <div className="footer_content">
          <div className="item_description">{currentItem.itemName}</div>
          <div className="button_group">
            <button className="buy_button" onClick={this.props.handleBuy}>
              {' '}
              Buy?{' '}
            </button>
            <button className="inventory_button">Inventory</button>
          </div>
        </div>
        // </div>
      );
    } else {
      return (
        <div className="footer_content">
          <div className="item_description"> </div>
          <div className="button_group">
            {/* <button className="buy_button"> </button> */}
            <button className="inventory_button">Inventory</button>
          </div>
        </div>
      );
    }
  }
}

export default Footer;
