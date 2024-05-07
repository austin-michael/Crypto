const { Router } = require("express");
const authController = require("../controllers/authController");

const router = Router();

router.post("/api/user/signup", authController.signup_post);
router.post("/api/user/login", authController.login_post);

module.exports = router;
