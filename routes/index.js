// ---------------------------------
// DEPENDENCIES
// ---------------------------------
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/care.js");
var passport = require("../config/passport");
const careController= require("../controllers/careController");
// ---------------------------------
// API ROUTES
// ---------------------------------
router.use("/api", apiRoutes);

// ---------------------------------
// PASSPORT ROUTES
// ---------------------------------
// router.post('/login', passport.authenticate('login', {
//     successRedirect: '/home',
//     failureRedirect: '/',
//     failureFlash : true 
//   }));

// router.post('/signup', passport.authenticate('signup', {
//     successRedirect: '/home',
//     failureRedirect: '/signup',
//     failureFlash : true 
// }));
router.post("/login", passport.authenticate("local"), function (req, res) {
    res.json('test');
});

router.post("/signup", careController.initialize); 

// function (req, res) {
//     res.json('test')
    // db.User.create({
    //     email: req.body.email,
    //     password: req.body.password
    // })
    //     .then(function () {
    //         res.redirect(307, "/api/login");
    //     })
    //     .catch(function (err) {
    //         res.status(401).json(err);
    //     });
// });

// Route for logging user out
router.post("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});


// ---------------------------------
// IF NO API ROUTES ARE HIT, SEND THE REACT APP
// ---------------------------------
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});




module.exports = router;