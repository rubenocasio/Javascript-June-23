const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    }
}, {timestamps: true})

const Users = mongoose.model("Users", UserSchema)

module.exports = Users;