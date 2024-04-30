const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");

router.post("/sign_up", authController.signUp);
router.post("/login", authController.login);

module.exports = router;
