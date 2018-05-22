import React, { Component } from 'react';
import Beverage from './Beverage.js'
import { menu, inventory } from '../js/menu-inventory.js'
import InventoryComp from './InventoryComp.js';
import Header from './Header.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: { ...menu },
      inventory: { ...inventory }
    }
    this.restock = this.restock.bind(this)
    this.inStockCheck = this.inStockCheck.bind(this)
    this.calculateStock = this.calculateStock.bind(this)
  }

  componentWillMount = () => {
    this.inStockCheck();
  }

  inStockCheck = () => {
    let s = this.state
    let newState = { ...this.state }
    for (let beverage in s.menu) {
      for (let ingredient in s.menu[beverage].ingredients) {
        if (s.menu[beverage].ingredients[ingredient] <= s.inventory[ingredient].stock) {
          newState.menu[beverage].inStock = true
        } else {
          newState.menu[beverage].inStock = false
          break;
        }
      }
    }
    this.setState({ newState })
  }

  restock = () => {
    for (let ingredient in this.state.inventory) {
      if (this.state.inventory.hasOwnProperty(ingredient)) {
        let newState = { ...this.state }
        newState.inventory[ingredient].stock = 10
        this.setState({ newState })
      }
    }
    this.inStockCheck()
  }

  calculateStock = (beverage) => {
    let newState = { ...this.state }
    for (let ingredient in this.state.menu[beverage].ingredients) {
      if (this.state.menu[beverage].ingredients.hasOwnProperty(ingredient)) {
        newState.inventory[ingredient].stock = this.state.inventory[ingredient].stock - this.state.menu[beverage].ingredients[ingredient]
      }
      if (newState.inventory[ingredient].stock < 0) {
        newState.inventory[ingredient].stock = 0
      }
    }
    this.setState({ newState })
    this.inStockCheck()
  }

  render() {
    const menuItems = Object.keys(this.state.menu).sort();
    return (
      <div className="App">
        <div className="head">
          <Header restock={this.restock.bind(this)} />
        </div>
        <div className="main">
          <div className="itemInventory">
            <InventoryComp inventory={this.state.inventory} />
          </div>
          <div className="drinkMenu">
            {
              menuItems.map(beverage => {
                let bev = this.state.menu[beverage]
                return (
                  <Beverage calculateStock={this.calculateStock.bind(this)} bev={beverage} key={bev.name} beverage={bev} />
                )
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;