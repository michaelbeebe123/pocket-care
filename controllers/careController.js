// ==============================================
// CONTROLLER METHODS
// ==============================================

const db = require("../models");

// ----------------------------------------------
// METHODS FOR THE FORM
// ----------------------------------------------
module.exports = {
    id: '5e321e5f3ec44b02e2d1bce3',

    findAll: function(req, res) {
        db.Account
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByID: function(req,res) {
        db.Account
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
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
            .findOneAndUpdate( id, req.body )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Account
            .findById( {id: req.params._id })
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