let inventory = {
    coffee: {
        name: 'Coffee',
        stock: 10,
        unitPrice: 0.75
    },
    decafCoffee: {
        name: 'Decaf Coffee',
        stock: 10,
        unitPrice: 0.75
    },
    sugar: {
        name: 'Sugar',
        stock: 10,
        unitPrice: 0.25
    },
    cream: {
        name: 'Cream',
        stock: 10,
        unitPrice: 0.25
    },
    steamedMilk: {
        name: 'Steamed Milk',
        stock: 10,
        unitPrice: 0.35
    },
    foamedMilk: {
        name: 'Foamed Milk',
        stock: 10,
        unitPrice: 0.35
    },
    espresso: {
        name: 'Espresso',
        stock: 10,
        unitPrice: 1.10
    },
    cocoa: {
        name: 'Cocoa',
        stock: 10,
        unitPrice: 0.90
    },
    whippedCream: {
        name: 'Whipped Cream',
        stock: 10,
        unitPrice: 1.00
    }
}

let menu = {
    coffee: {
        name: 'Coffee',
        ingredients: {
            coffee: 3,
            sugar: 1,
            cream: 1,
        },
        price: 2.75,
        inStock: true
    },
    decafCoffee: {
        name: 'Decaf Coffee',
        ingredients: {
            decafCoffee: 3,
            sugar: 1,
            cream: 1
        },
        price: 2.75,
        inStock: true
    },
    caffeLate: {
        name: 'Caffe Late',
        ingredients: {
            espresso: 2,
            steamedMilk: 1
        },
        price: 2.55,
        inStock: true
    },
    caffeAmericano: {
        name: 'Caffe Americano',
        ingredients: {
            espresso: 3
        },
        price: 3.30,
        inStock: true
    },
    caffeMocha: {
        name: 'Caffe Mocha',
        ingredients: {
            espresso: 1,
            cocoa: 1,
            steamedMilk: 1,
            whippedCream: 1
        },
        price: 2.70,
        inStock: true
    },
    cappuccino: {
        name: 'Cappuccino',
        ingredients: {
            espresso: 2,
            steamedMilk: 1,
            foamedMilk: 1
        },
        price: 2.90,
        inStock: true
    }
}

module.exports = {
    inventory,
    menu
}
