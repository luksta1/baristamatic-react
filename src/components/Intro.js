import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import App from "./App.js"
import { Link } from 'react-router-dom'

const Intro = () => {

    // landing page with link to main app on button click
    return (
        <div id="intro-screen">
            <div id="intro-content">
                <h1>Baristamatic</h1>
                <Link to={`/brew`}>
                    <Button animated>
                        <Button.Content visible>Start Brewing Coffee</Button.Content>
                        <Button.Content hidden>
                            <Icon name='right arrow' />
                        </Button.Content>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Intro