// ==============================================
// TODO: CONTROLLER METHODS
// ==============================================

const db = require("../models");

// ----------------------------------------------
// METHODS FOR THE FORM
// ----------------------------------------------
module.exports = {
    findAll: function(req, res) {
        db.Account
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByID: function(req,res) {
        // TODO:
    },
    initialize: function(req, res) {
        console.log(req.body)
        db.Account
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Account
            .findOneAndUpdate( {_id: req.params.id }, req.body )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Account
            .findById( {_id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

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