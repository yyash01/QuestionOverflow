const { Router } = require("express");
const answersController = require("../controllers/answersController");
const { requireAuth } = require("../middleware/authMiddleware");

const router = Router();

//show text-editor when someone wants to post a Answer
router.get("/new", requireAuth, answersController.newQ);

module.exports = router;
