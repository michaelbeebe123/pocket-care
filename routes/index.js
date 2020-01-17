// ---------------------------------
// DEPENDENCIES
// ---------------------------------
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// ---------------------------------
// API ROUTES
// ---------------------------------
router.use("/api", apiRoutes);

// ---------------------------------
// IF NO API ROUTES ARE HIT, SEND THE REACT APP
// ---------------------------------
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// ---------------------------------
// PASSPORT ROUTES
// ---------------------------------
router.post('/login', passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash : true 
  }));

router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/home',
    failureRedirect: '/signup',
    failureFlash : true 
}));





module.exports = router;