const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: INPUT ALL OF THE FIELDS THAT WILL PUSHED TO THE DB
const accountSchema = new Schema({

})

const Account = mongoose.model("Account", accountSchema);
module.exports = Account