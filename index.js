const app = require('express')();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const UserRoute = require('./route/route')

const PORT = process.env.PORT || 3003;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require('./connection/db');

app.use('/user', UserRoute)

app.listen(PORT, (err) => {
    if (err) {
        console.log("error in port connection", err)
    } else {
        console.log(`app listen ${PORT} succesfully`)
    }
})