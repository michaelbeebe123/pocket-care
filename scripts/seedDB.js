// ---------------------------------
// DEPENDENCIES
// ---------------------------------
const mongoose = require("mongoose");
const db = require("../models")

// ---------------------------------
// CONNECTING TO MONGO DB
// ---------------------------------
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/pocket-care"
);

const accountSeed = [
    
];

// FIXME: DO I NEED THE .remove()? WILL THAT CAUSE PROBLEMS?
db.Account
    .remove({})
    .then(() => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })