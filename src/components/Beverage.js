import React from 'react';
import { Modal, Header, Button, Card, Icon, Image } from 'semantic-ui-react'

const Beverage = (props) => {
    let stock = '';
    if (props.beverage.inStock) {
        stock += 'Available'
    } else {
        stock += 'Not Available'
    }

    const stockCalc = () => {
        props.calculateStock(props.bev)
    }
    return (
        <Modal trigger={
            <Card onClick={stockCalc} className="beverageCard">
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
        } basic size='small'>
            <Header icon='thumbs up' content={`Success! One ${props.beverage.name} is being dispensed. Order more?`} />
            <Modal.Content>

            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted>
                    <Icon name='remove' /> No
          </Button>
                <Button color='green' inverted>
                    <Icon name='checkmark' /> Yes
          </Button>
            </Modal.Actions>
        </Modal>

    )
}

export default Beverage