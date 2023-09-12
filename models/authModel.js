const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the username"],
    },
    email: {
        type: String,
        required: [true, "Please add the email"],
        unique: [true, "User already register"]
    },
    password: {
        type: String,
        required: [true, "Please add the password"],
    },
}, {
    timestamps: true,
})


module.exports = mongoose.model("auth", authSchema)