var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
module.exports = mongoose.model('User',{
    username: String,
    userpassword: String,
    useremail: String,
});

const User = mongoose.model("User", accountSchema);
module.exports = User