const { menu, inventory } = require('./menu-inventory')
const { mapInventory, mapMenu } = require('./display');
const { restock, inStockCheck, runCoffeeMachine } = require('./logic');

const main = () => {
    restock(menu, inventory)
    inStockCheck(menu, inventory)
    mapInventory(inventory);
    mapMenu(menu)
    runCoffeeMachine(inventory, menu)
}

main();

