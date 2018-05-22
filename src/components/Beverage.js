import React from 'react';
import { Loader, Dimmer, Card, Icon, Image } from 'semantic-ui-react'


const Beverage = (props) => {
    let stock = '';
    if (props.beverage.inStock) {
        stock += 'Available'
        // document.getElementById("coffee").classList.remove('outStock');
    } else {
        stock += 'Not Available'
        // document.getElementById(props.bev).classList.add('outStock');
    }

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