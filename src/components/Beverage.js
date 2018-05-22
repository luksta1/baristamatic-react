import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


const Beverage = (props) => {

    // logic to check if the beverage is in stock or not and set the tag line appropriately
    let stock = '';
    if (props.beverage.inStock) {
        stock += 'Available'
    } else {
        stock += 'Not Available'
    }
    // function to run an order once a drink is click on. future refactoring would include dimming out a drink once it becomes unavailable
    const runOrder = () => {
        props.calculateStock(props.bev)
    }

    return (
        <Card onClick={runOrder} id={props.bev} className="beverageCard">
            <Image src={props.beverage.image} />
            <Card.Content>
                <Card.Header>
                    {props.beverage.name}
                </Card.Header>
                <Card.Meta>
                    <span className='price'>
                        ${props.beverage.price.toFixed(2)}
                    </span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name='info circle' />
                {stock}

            </Card.Content>
        </Card>

    )
}

export default Beverage