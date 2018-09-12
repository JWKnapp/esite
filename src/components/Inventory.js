import React, { Component } from 'react';

const Inventory = () => {
  return (
    <div className="stock">
      <ul className="gold">
        <li className="amount">1000</li>
        <li className="money_type">Gold</li>
      </ul>
      <div className="inventory">
        <ul className="inventory_name">
          <li> Stocked </li>
          <li> Owned </li>
        </ul>
        <ul className="inventory_count">
          <li>0</li>
          <li>1</li>
        </ul>
      </div>
    </div>
  );
};

export default Inventory;
