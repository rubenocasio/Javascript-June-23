//import express and store express in a variable called express
const express = require("express")

//initialize the express application and store it in a variable called 'app'
const app = express()

//intialize the port to 8000
const port = 8000

//port 21 - ftp
//port 22 - ssh
//port 80 - http
//port 443 - https
//65535

app.use(express.json()) //allow the application to parse json data (form information)
app.use(express.urlencoded({extended: true})) //allow the application to accept form information

const menuItems = [
    {name: "Calamari", price: 15.00}, //0
    {name: "Maine Lobster Roll", price: 19.00}, // 1
    {name: "Lasagna", price: 20},
    {name: "Pizza", price: 10},
    {name: "A5 Japanese Wagyu", price: 99},
    { name: "🍔", price: 12.0 },
    { name: "🍕", price: 15.0 },
    { name: "🦑", price: 19.0 },
    { name: "🍲", price: 9.0 },
    { name: "🍝", price: 20.0 },
]

//get= retrieve all or retrieve one
//post = create something new
//put = update something
//patch = update something
//delete = delete something

//http://localhost:8000/api
app.get('/api', (request, response) => {
    response.json({message: "Hola!!"})
})



//create a new menu item
app.post("/api/menu/new", (req, res) => {
    console.log(req.body)
    menuItems.push(req.body)
    res.json({
        count: menuItems.length,
        results: menuItems
    })
})

//Get all --- Read ALL
// app.get --> takes 2 arguments: (path, callback function (request, response))
// request: what is requested from UI
// response: what are we responding with?
app.get('/api/menu', (req, res) => {
    res.json({
        count: menuItems.length,
        results: menuItems})
})


//get one menu item by index number
app.get("/api/menu/:idx", (req, res) => {
    res.json({results: menuItems[req.params.idx]})
})

//update a menu item based on its index number
app.put("/api/menu/:idx", (req, res) => {
    menuItems[req.params.idx] = req.body;
    res.json({
        count: menuItems.length,
        results: menuItems})
})
app.patch("/api/menu/:idx", (req, res) => {
    menuItems[req.params.idx] = req.body;
    res.json({
        count: menuItems.length,
        results: menuItems})
})

//delete a menu item based on its index number
app.delete("/api/menu/:idx", (req, res) => {
    menuItems.splice(req.params.idx, 1)
    res.json({results: menuItems})
})


//line of code that actually runs our server on a specified port.
// this needs to be below the other code blocks-> make this is the last line
app.listen(port, () => console.log(`Welcome to Death Star! You are on bridge star port: ${port}`) )