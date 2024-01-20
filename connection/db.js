const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL).then(() => {
    console.log("db connected successfully")
}).catch((err) => {
    console.log("error in DB connection", err)
}
)
