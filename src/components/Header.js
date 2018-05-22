import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Header = (props) => {

    // Both right side buttons run the restock function passed down from props. Quit links back to home page
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