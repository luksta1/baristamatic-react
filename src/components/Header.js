import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'
const { runCoffeeMachine } = require('../js/logic.js')

const Header = (props) => {

    return (
        <Menu>
            <Menu.Item className='logo' name='logo'>
                Baristamatic
        </Menu.Item>

            <Menu.Menu position='right'>

                <Menu.Item name='restock' onClick={props.restock}>
                    Restock
</Menu.Item>
                <Menu.Item name='quit' onClick={props.restock}>
                    Quit
          </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default Header