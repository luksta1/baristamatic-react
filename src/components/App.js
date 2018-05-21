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
          console.log('ONE', s.menu[beverage].ingredients[ingredient], s.inventory[ingredient].stock)
          newState.menu[beverage].inStock = true
        } else {
          console.log('TWO', s.menu[beverage].ingredients[ingredient], s.inventory[ingredient].stock)
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

  calculateStock = (e) => {
    let beverage = e.target.name
    let newState = { ...this.state }
    for (let ingredient in this.state.menu[beverage].ingredients) {
      if (this.state.menu[beverage].ingredients.hasOwnProperty(ingredient)) {
        newState.inventory[ingredient].stock = this.state.inventory[ingredient].stock - this.state.menu[beverage].ingredients[ingredient]
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
          <Header />
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
                  <Beverage name={bev.name} key={bev.name} beverage={bev} />
                )
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
