const mongoose = require("mongoose");
const uuid = require("uuid");
const Schema = mongoose.Schema;

const postmodelSchema = new Schema({
    _id: { 
        type: String, 
        default: () => uuid.v4()
    },
    userId: {
        type: String,
        ref: 'User',
        required: true
    },
    post: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("Post", postmodelSchema, "Post");
