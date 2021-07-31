const { Router } = require("express");
const questionsController = require("../controllers/questionsController");

const router = Router();

router.get("/UpdateQuestionList", questionsController.newquestion_get);
router.post("/UpdateQuestionList", questionsController.newquestion_post);

module.exports = router;
