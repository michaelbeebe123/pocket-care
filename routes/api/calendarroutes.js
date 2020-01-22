const router = require('express').Router();
const careController = require("../../controllers/careController");

router.route("/")
  .get(careController.findAll)
  .post(careController.create);

  module.exports = router;