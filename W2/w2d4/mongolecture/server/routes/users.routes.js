const UserController = require('../controllers/users.controller')

module.exports = (app) => {
    //Api test
    app.get('/api/testing', UserController.apiTest)
}