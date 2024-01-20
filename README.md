# user post

## Create User

```
curl --location 'http://localhost:3003/user/createUser' \
--header 'Content-Type: application/json' \
--data '{
    "userName": "ravi"
}'
```
## Create Post
```
curl --location 'http://localhost:3003/user/createPost' \
--header 'Content-Type: application/json' \
--data '{
    "userId":"sj2344sjss",
    "post":"hi, ravi"
}'
```
## Create comment
```
curl --location 'http://localhost:3003/user/createComment' \
--header 'Content-Type: application/json' \
--data '{
    "userId":"sj2344sjss",
    "postId":"dddjaaww33",
    "comment":"good"
}'
```

## get post

```
curl --location 'http://localhost:3003/user/findPostById' \
--header 'Content-Type: application/json' \
--data '{
    "postId":"hddjdjfdk"
}'
```

## Get post with only "good" comments 
```
curl --location 'http://localhost:3003/user/findPostComment' \
--header 'Content-Type: application/json' \
--data '{
    "postId":"hddjdjfdk"
}'
```
