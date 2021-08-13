const { Router } = require("express");
const answersController = require("../controllers/answersController");
const questionsController = require("../controllers/questionsController");
const { requireAuth } = require("../middleware/authMiddleware");
const router = Router();

router.get("/show/:id", requireAuth, answersController.detailAnswer_get);

router.get("/:id", requireAuth, questionsController.detailQuestion_get);
module.exports = router;
