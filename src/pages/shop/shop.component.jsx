import React, { Component } from 'react';

import SHOP_DATA from './shop.data';

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = SHOP_DATA;
  }

  render() {
    return (
      <div>SHOP PAGE</div>
    );
  }
}