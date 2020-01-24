// ==============================================
// TODO: CONTROLLER METHODS
// ==============================================

const db = require("../models");

// ----------------------------------------------
// METHODS FOR THE FORM
// ----------------------------------------------
module.exports = {
    login: function(req, res) {
        if(req.isAuthenticated()){
            res.redirect("/home");
        } else{
            res.redirect("/login");
        }
    },
    logout: function(req,res) {
        // TODO: figure out how to connect with passport
    }
    
}