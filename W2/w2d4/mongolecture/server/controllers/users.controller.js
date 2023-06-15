const User = require('../models/users.models')

module.exports.apiTest = (req, res) => {
    res.json({message: "Hello World!"})
}

module.exports.createUser = (req, res) => {
    User.create(req.body)
    .then((newUser) => {res.json({results: newUser})})
    .catch((err) => {res.json({err: err})})
}

module.exports.allUsers = (req, res) => {
    User.find()
    .then((allUsers) => {res.json({results: allUsers})})
    .catch((err) => {res.json({err: err})})
}

module.exports.readOne = (req, res) => {
    User.findOne({_id: req.params.id })
    .then((oneUser) => {res.json({results: oneUser})})
    .catch((err) => {res.json({err: err})})
}

module.exports.update = (req, res) => {
    User.findOneAndUpdate({_id: req.params.id }, req.body, {new:true, runValidators: true})
    .then((updateUser) => {res.json({results: updateUser})})
    .catch((err) => {res.json({err: err})})
}

module.exports.delete = (req, res) => {
    User.deleteOne({_id: req.params.id })
    .then((deleteUser) => {res.json({results: deleteUser})})
    .catch((err) => {res.json({err: err})})
}
