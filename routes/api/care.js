const router = require('express').Router();
const careController = require("../../controllers/careController");

// ---------------------------------------
// CALENDAR ROUTE
// ---------------------------------------
router.route("/home")
    .get(careController.findAll)

router.route("/submit-appointment")
    .post(careController.initialize)

router.route("/update-appointment")
    .post(careController.update)

// ---------------------------------------
// FORM ROUTES
// ---------------------------------------
router.route("/form")
    .get(careController.findAll)

router.route("/form/:id")
    .get(careController.findByID)

router.route("/submit-form")
    .post(careController.initialize)

router.route("/update-form/:id")
    .post(careController.update)

// ---------------------------------------
// HISTORY ROUTES
// ---------------------------------------
router.route("/api/history/:id")
    .post(careController.findByID)
    .put(careController.update)
    .delete(careController.remove)

// ---------------------------------------
// PRESCRIPTION ROUTES
// ---------------------------------------
router.route("/prescriptions")
    .get(careController.findAll)

router.route("/submit-prescription")
    .post(careController.initialize)    

router.route("/update-prescriptions")
    .post(careController.update)

// ---------------------------------------
// LOGIN & SIGNUP TODO:
// ---------------------------------------
router.route("/")

module.exports = router;