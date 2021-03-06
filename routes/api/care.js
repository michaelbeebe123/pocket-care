const router = require('express').Router();
const careController = require("../../controllers/careController");
// const loginController = require("../../controllers/loginController");
const id = "5e321e5f3ec44b02e2d1bce3"

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

router.route(`"/update-form/:id"`)
    .post(careController.update)

// ---------------------------------------
// HISTORY ROUTES
// ---------------------------------------
router.route(`/api/history/:${id}`)
    .get(careController.findAll)
    .put(careController.update)

// ---------------------------------------
// PRESCRIPTION ROUTES
// ---------------------------------------
router.route("/prescriptions")
    .get(careController.findAll)

// router.route("/prescription-form")
//     .get(careController.findAll)

router.route("/submit-prescription")
    .post(careController.initialize)    

router.route("/update-prescriptions")
    .post(careController.update)

// ---------------------------------------
// LOGIN & SIGNUP TODO:
// ---------------------------------------
// router.route("/login")
//     .post(loginController.login)

router.route("/")

module.exports = router;