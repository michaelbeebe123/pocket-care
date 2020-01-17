const db = require("../models");

// ==============================================
// TODO: CONTROLLER METHODS
// ==============================================

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
    create: function(req, res) {
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
    }
}