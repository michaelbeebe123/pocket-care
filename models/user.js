var mongoose = require('mongoose');
 
module.exports = mongoose.model('User',{
        username: String,
    password: String,
    email: String,
    gender: String,
    address: String
});

const User = mongoose.model("User", accountSchema);
module.exports = User