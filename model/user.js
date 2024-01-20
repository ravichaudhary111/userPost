const mongoose = require("mongoose");
const uuid = require("uuid"); 
const Schema = mongoose.Schema

const UsermodelSchema = new Schema({
    _id: { 
        type: String, 
        default: () => uuid.v4()
    },
    userName: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("User", UsermodelSchema, "User")
