const { mapInventory, mapMenu } = require('./display');

const inStockCheck = (menu, inv) => {
    for (let beverage in menu) {
        if (menu.hasOwnProperty(beverage)) {
            for (let ingredient in menu[beverage].ingredients) {
                if (menu[beverage].ingredients.hasOwnProperty(ingredient)) {
                    if (menu[beverage].ingredients[ingredient] <= inv[ingredient].stock) {
                        menu[beverage].inStock = true
                    } else {
                        menu[beverage].inStock = false
                        break;
                    }
                }
            }
        }
    }
}

const restock = (menu, inv) => {
    for (let ingredient in inv) {
        if (inv.hasOwnProperty(ingredient)) {
            inv[ingredient].stock = 10
        }
    }
    inStockCheck(menu, inv)
}

const calculateStock = (beverage, inv, menu) => {
    for (let ingredient in menu[beverage].ingredients) {
        if (menu[beverage].ingredients.hasOwnProperty(ingredient)) {
            inv[ingredient].stock = inv[ingredient].stock - menu[beverage].ingredients[ingredient]
        }
    }
    inStockCheck(menu, inv)
}

const runOrder = (input, menu, inv) => {
    const menuItems = Object.keys(menu).sort();
    let selection = Number(input);

    if (!isNaN(selection) && selection > 0 && selection <= menuItems.length) {
        let bevOrdered = menu[menuItems[selection - 1]]
        if (!bevOrdered.inStock) {
            console.log(`Out Of Stock: ${bevOrdered.name}`)
        } else {
            console.log(`Dispensing: ${bevOrdered.name}`)
            calculateStock(menuItems[selection - 1], inv, menu);
            mapInventory(inv);
            mapMenu(menu)
        }
    } else {
        console.log(`Invalid Selection: ${input}`)
    }

}

const runCoffeeMachine = (inv, menu, input) => {
    switch (input.trim()) {
        case 'r':
        case 'R':
            console.log('Restocking Machine');
            restock(menu, inv)
            mapInventory(inv);
            mapMenu(menu)
            break;
        case 'q':
        case 'Q':
            console.log('Exiting...')
            break;
        default:
            runOrder(input, menu, inv)
            break;
    }
}

module.exports = {
    restock,
    inStockCheck,
    calculateStock,
    runCoffeeMachine
}
