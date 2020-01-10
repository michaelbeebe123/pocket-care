// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")
const app = express();

const PORT = process.env.PORT || 3001;

// MIDDLEWARE
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// SERVING STATIC ASSETS
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(routes);


// CONNECTING TO THE MONGO DB
// TODO: ADD THE PATH TO THE DB
mongoose.connect(process.env.MONGODB_URI) || ""

app.listen(PORT, function() {
    app.listen(PORT, function() {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
    })
});