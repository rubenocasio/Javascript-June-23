const UserController = require('../controllers/users.controller')

module.exports = (app) => {
    //Api test
    app.get('/api/testing', UserController.apiTest)

    //Creat User
    app.post('/api/users/new', UserController.createUser)

    //Read all users
    app.get('/api/users', UserController.allUsers)

    //Read One
    app.get('/api/users/:id', UserController.readOne)

    //Update user
    app.put('/api/users/:id', UserController.update)

    //Delete one
    app.delete('/api/users/:id', UserController.delete)

}