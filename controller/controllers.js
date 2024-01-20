
const User = require('../model/user');
const Post = require('../model/post');
const PostComment = require('../model/comment');
const user = require('../model/user');

exports.createUser = async(req,res) => {
    try {
        const {userName} = req.body

        const user = new User({userName})
        const createdUser = await user.save()

       return res.status(201).send({'message':'user created Successfully',data: createdUser,status:201})
    }catch(err) {
        
        console.log('error in createUser',err)
     return  res.status(500).send({'message':'Internal Server Srror',status:500})
    }
}


exports.createPost = async(req,res) => {
    try {
        const {userId,post} = req.body

        const postData = new Post({userId,post})
        const createdPost = await postData.save()

        res.status(201).send({'message':'post created Successfully',data: createdPost,status:201})
    }catch(err) {
        console.log('error in createPost',err)
        return  res.status(500).send({'message':'Internal Server Srror',status:500})

    }
}

exports.createComment = async(req,res) => {
    try {
        const {userId,postId,comment} = req.body

        const commentData = new PostComment({userId,postId,comment})
        const createdComment = await commentData.save()

        res.status(201).send({'message':'Comment created Successfully',data: createdComment,status:201})
    }catch(err) {
        console.log('error in createPost',err)
        return  res.status(500).send({'message':'Internal Server Srror',status:500})

    }
}

exports.findPostById = async(req,res) => {
    try {
        const {postId} = req.body

        const post = await Post.findById({_id : postId}).populate('userId')

        res.status(200).send({'message':'post fetched',data: post,status:200})
    }catch(err) {
        console.log('error in createPost',err)
        return  res.status(500).send({'message':'Internal Server Srror',status:500})

    }
}

//
exports.findPostComment = async(req,res) => {
    try {
        const {postId} = req.body

        let post = await PostComment.find({postId : postId,comment : {$regex : new RegExp("good", "i")}}).populate('postId').populate('userId')

        if(!(post && post.length)) {
            post = await Post.findById({_id : postId}).populate('userId','userName')
        }
        res.status(200).send({'message':'post with comment fetched',data: post,status:200})
    }catch(err) {
        console.log('error in createPost',err)
        return  res.status(500).send({'message':'Internal Server Srror',status:500})

    }
}