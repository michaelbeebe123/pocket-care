const router = require('express').Router();
const careController = require("../../controllers/careController");

// ---------------------------------------
// CALENDAR ROUTES FIXME:
// ---------------------------------------
router.route("/home")
    .get(careController.findAll)

router.route("/submit-appointment")
    .post(careController.create)

router.route("/update-appointment")
    .post(careController.update)

// ---------------------------------------
// FORM ROUTES FIXME:
// ---------------------------------------
router.route("/form")
    .get(careController.findAll)

router.route("/submit-form")
    .post(careController.create)

router.route("/update-form")
    .post(careController.update)

// ---------------------------------------
// PRESCRIPTION ROUTES FIXME:
// ---------------------------------------
router.route("/prescriptions")
    .get(careController.findAll)

router.route("/submit-prescription")
    .post(careController.create)    

router.route("/update-prescriptions")
    .post(careController.update)

// ---------------------------------------
// LOGIN & SIGNUP TODO:
// ---------------------------------------
router.route("/")

module.exports = router;