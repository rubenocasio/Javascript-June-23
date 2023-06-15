const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastname: {
        type: String,
    }
})

const Users = mongoose.model("Users", UserSchema)

module.exports = Users;