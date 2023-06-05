// ------------- Course Overview -------------

// ------------- Javascript history -------------

// ------------- Scope ------------
var global = "Hi, my name is Ruben"
var r = "Ronnie Rios"
function sayName(){
    console.log(global)
}
// console.log(r) // undefined
// sayName() // Hi my name


function stack(){
    var local = "MERN STACK RULES"
    console.log(local)
}
// console.log(local)//undefined
// stack()// "MERN STACK RULES"

// -------------- Hoisting ------------

// console.log(varVariable)
var varVariable = "Hello World"

//Behind the scenes
var varVariable = undefined
// console.log(varVariable)
varVariable = "Hello World"

// console.log(hello);                                   
var hello = 'world'; //Undefined                            


// -------------- Const vs Let vs Var --------------

//two new ways: const & let

for(let i = 0; i < 10; i++){
    // console.log(i)
}

const skills = ['debugging', 'sleeping', 'barking', 'fed treat']
// console.log(skills)
skills.push('hunt')
// console.log(skills)

skills[0] = 'begging'
// console.log(skills.toString())

// -------------- Destructuring --------------
const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const fn = person.firstName
// console.log(fn)

const ani = animals[0]
// console.log(ani)

const {firstName, email} = person;
// console.log(firstName + '\n' + email)

const [anything] = animals
// console.log(...anything)

// -------------- Spread / Rest --------------
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    brand2: 'Mercedes',
    type: 'car',
    year: 2021,
    color2: 'yellow'
  }
  const myUpdatedVehicle = {...myVehicle,...updateMyVehicle}
//   console.log(myUpdatedVehicle)

// -------------- Arrow functions --------------

function printHello(){
    console.log("Hello")
}
// printHello()

const printHello2 = () => {
    console.log("Hello2")    
}
// printHello2()

//Pre ES6
function changePrice(price, discount) {
    return price * discount
}
// console.log(changePrice(50.99, 0.5))

//After ES6 - long handed
const changePrice2 = (price, discount) => {
    return price * discount
}
// console.log(changePrice2(105.99, 0.5))

//After ES6 - short handed
const changePrice3  = (price, discount) => price * discount
// console.log(changePrice3(105.99, 0.5))

// -------------- Ternary functions --------------

//if...else statement
const rating = 5
if(rating >= 7){
    //condition
    // console.log("I'm greater")
} else {
    // console.log("I'm not greater")
}

const love = 8;
// Condition          // True/Yes                  //False/No
// love >= 6 ? console.log("I'm IN LOVE") : console.log("I'm not in love")

if(love >= 9){
    // console.log("I'm IN LOVE")
} else if(love >= 8) {
    // console.log("I'm always loved")
} else {
    // console.log("I'm not loved")
}

love >= 9 ? console.log("I'm IN LOVE") : love >= 8 ? console.log("I'm always loved") : console.log("I'm not in love")