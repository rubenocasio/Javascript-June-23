const User = require('../models/users.models')

module.exports.apiTest = (req, res) => {
    res.json({message: "Hello World!"})
}