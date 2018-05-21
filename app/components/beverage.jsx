import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const beverage = (props) => {
    <Card>
        <Image src='/assets/images/avatar/large/matthew.png' />
        <Card.Content>
            <Card.Header>
                {props.beverage.name}
            </Card.Header>
            <Card.Meta>
                <span className='price'>
                    {props.beverage.cost}
                </span>
            </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <Icon name='user' />
            {props.beverage.inStock}
        </Card.Content>
    </Card>
}