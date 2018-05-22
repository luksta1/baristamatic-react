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


  // run function to check inventory stock each time the app is loaded
  componentWillMount = () => {
    this.inStockCheck();
  }

  // function to reset the inventory on state appropriately
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

  // function to reset the stock on state appropriately, which then runs the function to check stock
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

  // function to calculate the stock on state based on an ordered drink, when then runs the function to check stock
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

  // render of the main app screen, header, inventory and mapping over the beverages
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
