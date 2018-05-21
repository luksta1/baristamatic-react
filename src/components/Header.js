import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'
const { runCoffeeMachine } = require('../js/logic.js')

export default class Header extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });


    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item name='logo'>
                    Baristamatic
        </Menu.Item>

                <Menu.Menu position='right'>

                    <Menu.Item name='restock' active={activeItem === 'restock'} onClick={this.handleItemClick}>
                        Restock
</Menu.Item>
                    <Menu.Item name='quit' active={activeItem === 'quit'} onClick={this.handleItemClick}>
                        Quit
          </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}