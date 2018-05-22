import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
                <Link to={`/`}>
                    <Menu.Item name='quit' onClick={props.restock}>
                        Quit
          </Menu.Item>
                </Link>
            </Menu.Menu>
        </Menu>
    )
}

export default Header