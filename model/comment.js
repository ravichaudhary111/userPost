const mongoose = require("mongoose");
const uuid = require("uuid"); 


const Schema = mongoose.Schema

const commentSchema = new Schema({
    _id: { 
        type: String, 
        default: () => uuid.v4()
    },
    comment: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        ref: 'Post',
        required: true
    },
    userId: {
        type: String,
        ref: 'User',
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    })

module.exports = mongoose.model("PostComment", commentSchema, "PostComment")
