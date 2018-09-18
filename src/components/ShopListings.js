import React, { Component } from 'react';

class ShopListings extends React.Component {
  constructor(props) {
    super(props);
    this.countItems = this.countItems.bind(this);
  }

  countItems(array, itemName) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == itemName) count++;
    }
    return count;
  }

  render() {
    console.log('this is ShopListing props', this.props);
    let currentItem = this.props.mainState.shopItems[
      this.props.mainState.itemIndexClicked
    ];

    if (currentItem) {
      return (
        <div className="inventory">
          <ul className="inventory_name">
            <li> Stocked </li>
            <li> Owned </li>
          </ul>
          <ul className="inventory_count">
            <li>{currentItem.inStock}</li>
            <li>
              {this.countItems(
                this.props.mainState.inventory,
                currentItem.itemName
              )}
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="inventory">
          <ul className="inventory_name">
            <li> Stocked </li>
            <li> Owned </li>
          </ul>
        </div>
      );
    }
  }
}

export default ShopListings;
