const express = require("express");
const { authUser, registerUser } = require("../controllers/userController");

const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

router.route("/").post(registerUser);
router.route("/login").post(protect, authUser);

module.exports = router;
