const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
// const authenticated = require("../middlewares/authenticated");

// router.use(authenticated);

router.post("/", authController.login);

module.exports = router;
