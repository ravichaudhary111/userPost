const express = require("express");
const route = express.Router()
const userController = require('../controller/controllers')

route.post('/createUser', userController.createUser) ///create ussr
route.post('/createPost', userController.createPost)   ///createpost
route.post('/createComment', userController.createComment) ///create comment

route.post('/postById', userController.findPostById) //get post
route.post('/getPostComments', userController.findPostComment)  ///get post with comment


module.exports = route