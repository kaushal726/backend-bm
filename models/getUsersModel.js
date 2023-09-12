const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "auth"
    },
    name: {
        type: String,
        required: true,
    },
    particular: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
    },
    total: {
        type: Number,
        required: true
    },
    created_at: {
        type: String,
    }
})


module.exports = mongoose.model("User", userSchema)