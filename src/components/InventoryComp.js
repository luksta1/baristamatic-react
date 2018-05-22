import React from 'react'
import { Header, Table } from 'semantic-ui-react'

const InventoryComp = (props) => {
    const invItems = Object.keys(props.inventory).sort();

    // basic inventory table based on passed down inventory props
    return (
        <div className="inv-wrap">
            <h2>INVENTORY</h2>
            <Table basic='very' celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ingredient</Table.HeaderCell>
                        <Table.HeaderCell>Stock #</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        invItems.map(ingredient => {
                            return (
                                <Table.Row>
                                    <Table.Cell>
                                        <Header as='h4'>
                                            <Header.Content>
                                                {props.inventory[ingredient].name}
                                            </Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {props.inventory[ingredient].stock}
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })}
                </Table.Body>
            </Table>
        </div>
    )
}
export default InventoryComp