const { Router } = require("express");
const authController = require("../controllers/authController");

const router = Router();

router.post("/login", authController.login_post);
router.post("/logout", authController.logout_post);

module.exports = router;
