const { Router } = require("express");
const authController = require("../controllers/authController");

const router = Router();

router.post("/api/user/signup", authController.signup_post);
router.post("/api/user/login", authController.login_post);
router.get("/api/user/error", authController.dummy_error);

module.exports = router;
