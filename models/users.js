const mongoose = require ("mongoose")
//Schema
const usersSchema = new mongoose.Schema({
    id: String,
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
})

const User = mongoose.model("Users", usersSchema)



module.exports = User;