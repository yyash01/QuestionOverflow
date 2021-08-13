const { Router } = require("express");
const questionsController = require("../controllers/questionsController");
const { requireAuth } = require("../middleware/authMiddleware");

//requireAuth : means Authentication is required before accessing any page.
//user will not be allowed to enter any sort of information before loging the system
const router = Router();

//show all Questions
router.get("/smoothies", requireAuth, questionsController.allquestion_get);

//display a form for creating a new Question
router.get(
  "/UpdateQuestionList",
  requireAuth,
  questionsController.newquestion_get
);

//to add the new Question in database
router.post(
  "/UpdateQuestionList",
  requireAuth,
  questionsController.newquestion_post
);

// shows more info about one Question
router.get("/questions/:id", questionsController.detailQuestion_get);

//functionality for search-bar
router.post("/question/show", questionsController.Question_show);

//to delete a question
router.post("/question/delete", questionsController.Question_delete);
module.exports = router;
