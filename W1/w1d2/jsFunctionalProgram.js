//------ callback functions -------

const makingPurchase = (person, price) => {
    console.log(`Processing purchase for ${person}, ${person} was charged ${price} `)
}
const returningItem = (person, price) => {
    console.log(`Processing refund for ${person}, ${price} will be issued back to ${person}'s bank account`)
}

const parentFunction = (callback, person, price) => {
    console.log("Welcome to Walmart")
    callback(person, price)
}
// makingPurchase("Edward", 99.99)
// returningItem("Edward", 99.99)

// parentFunction(makingPurchase, 'Stefanie', 150.55)
// parentFunction(returningItem, 'Stefanie', 150.55)


// ------ Object.freeze() -------
const shoppingList = Object.freeze([
    { id: 3, itemName: "Dog Food", price: 10.29, shops: ["Petco", "Trader Joes"] },
    { id: 5, itemName: "Logitech Gaming Chair", price: 1500, shops: ["Amazon", "Best Buy"]},
    { id: 9, itemName: "Soup Dumplings", price: 13.29, shops: ["Trader Joes"] },
    { id: 2, itemName: "Air ticket to Japan", price: 1400, shops: ["Expedia"] },
    { id: 10, itemName: "Custard Lemon Tart", price: 13.99, shops: ["Trader Joes"] },
]);

// ------ .map -------

const nums = [1,2,3,4,5]
const doubleNum = nums.map( (nums) => nums * 2 )
// console.log(doubleNum) //[2,4,6,8,10]

const prices = shoppingList.map((data) => {
    return data.price
})
// console.log(prices)

//Two elements
const prices2 = shoppingList.map((data, idx) => `This is our index value: ${idx} - Price: ${data.price}` )
// console.log(prices2)

const prices3 = shoppingList.map((chelsey) => {
    return chelsey.itemName
})
// console.log(prices3)

// ------ .filter -------

const cheapItems = shoppingList.filter((item) => item.price < 100)
// console.log(cheapItems)

const cheapItems2 = shoppingList.filter((item) => item.price < 100).map((item) => item.itemName)
// console.log(cheapItems2)

const cheapItems3 = shoppingList.filter((item) => item.price > 100).map((item) => item.itemName)
// console.log(cheapItems3)

// Bonus Stuff
// ------- .concat ----------
//Add TV to Shopping List
const addTV = shoppingList.concat([{ itemName: "TV", price: 1299, shop: ["BestBuy"] }]);
// console.log(addTV);

//----------.slice ---------
// Get the first 2 items from the list
const firstTwoItems = [...shoppingList.slice(0, 2)]
// console.log(firstTwoItems)

// -------.sort -----------
const sortedItems = cheapItems2.sort()
console.log(sortedItems) //[ 'Custard Lemon Tart', 'Dog Food', 'Soup Dumplings' ]