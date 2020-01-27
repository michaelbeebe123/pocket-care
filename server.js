// ---------------------------------
// DEPENDENCIES
// ---------------------------------
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")
const bCrypt = require("bcrypt-nodejs");
const app = express();

const PORT = process.env.PORT || 3001;

// ---------------------------------
// CONFIGURING PASSPORT
// ---------------------------------
var passport = require('passport');
const LocalStrategy = require("passport-local").Strategy
var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

// passport.serializeUser(function(user, done) {
//     done(null, user._id);
//   });
   
//   passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//       done(err, user);
//     });
//   });

// var isValidPassword = function(user, password){
//     return bCrypt.compareSync(password, user.password);
// }

// // Generates hash using bCrypt
// var createHash = function(password){
//     return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
//    }

// // passport/login.js
// passport.use('login', new LocalStrategy({
//     passReqToCallback : true
//   },
//   function(req, username, password, done) { 
//     // check in mongo if a user with username exists or not
//     User.findOne({ 'username' :  username }, 
//       function(err, user) {
//         // In case of any error, return using the done method
//         if (err)
//           return done(err);
//         // Username does not exist, log error & redirect back
//         if (!user){
//           console.log('User Not Found with username '+username);
//           return done(null, false, 
//                 req.flash('message', 'User Not found.'));                 
//         }
//         // User exists but wrong password, log the error 
//         if (!isValidPassword(user, password)){
//           console.log('Invalid Password');
//           return done(null, false, 
//               req.flash('message', 'Invalid Password'));
//         }
//         // User and password both match, return user from 
//         // done method which will be treated like success
//         return done(null, user);
//       }
//     );
// }));

// ---------------------------------
// MIDDLEWARE
// ---------------------------------
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// ---------------------------------
// SERVING STATIC ASSETS
// ---------------------------------
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(routes);
// require('./routes')(app);

// ---------------------------------
// CONNECTING TO THE MONGO DB
// ---------------------------------
mongoose.connect((process.env.MONGODB_URI) || "mongodb://localhost/pocket-care")

    app.listen(PORT, function() {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
    })
;