const express = require("express");
const router = express.Router();
const UserContoller = require("../controllers/users");

router.post("/register", UserContoller.createUser);
router.post("/login", UserContoller.loginUser);

module.exports = router;
