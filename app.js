const express = require("express")
const path = require("path")
const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/yelp-camp')
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })


const app = express()


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
    res.send("home")
})

app.listen(3000, () => {
    console.log("Serving on port 3000")
})