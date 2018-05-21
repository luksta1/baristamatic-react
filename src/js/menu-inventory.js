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
        stock: 0,
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
        inStock: true,
        image: '/assets/5_coffee.png'
    },
    decafCoffee: {
        name: 'Decaf Coffee',
        ingredients: {
            decafCoffee: 3,
            sugar: 1,
            cream: 1
        },
        price: 2.75,
        inStock: true,
        image: '/assets/6_decaf.png'
    },
    caffeLatte: {
        name: 'Caffe Latte',
        ingredients: {
            espresso: 2,
            steamedMilk: 1
        },
        price: 2.55,
        inStock: true,
        image: '/assets/2_cafelatte.png'
    },
    caffeAmericano: {
        name: 'Caffe Americano',
        ingredients: {
            espresso: 3
        },
        price: 3.30,
        inStock: true,
        image: '/assets/1_cafeamericano.png'
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
        inStock: true,
        image: '/assets/3_cafemocha.png'
    },
    cappuccino: {
        name: 'Cappuccino',
        ingredients: {
            espresso: 2,
            steamedMilk: 1,
            foamedMilk: 1
        },
        price: 2.90,
        inStock: true,
        image: '/assets/4_cappuccino.png'
    }
}

module.exports = {
    inventory,
    menu
}
