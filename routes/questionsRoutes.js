const { Router } = require("express");
const questionsController = require("../controllers/questionsController");
const answersController = require("../controllers/answersController");
const { requireAuth } = require("../middleware/authMiddleware");

const router = Router({ mergeParams: true });

//show all Questions
router.get(
  "/:userid/smoothies",
  requireAuth,
  questionsController.allquestion_get
);

//display a form for creating a new Question
router.get(
  "/:userid/UpdateQuestionList",
  requireAuth,
  questionsController.newquestion_get
);

//to add the new Question in database/WebSite
router.post(
  "/:userid/UpdateQuestionList",
  requireAuth,
  questionsController.newquestion_post
);

// shows more info about one Question
router.get("/:userid/:id", requireAuth, questionsController.detailQuestion_get);

//functionality for search-bar - not Used
router.post(
  "/:userid/question/show",
  requireAuth,
  questionsController.Question_show
);

//to delete a question
router.post(
  "/:userid/delete",
  requireAuth,
  questionsController.Question_delete
);
module.exports = router;

//show text-editor when someone wants to post a Answer
router.get("/:userid/:id/answer/new", requireAuth, answersController.newQ);

//show detail page for a pariticular answer
router.get(
  "/:userid/:questionid/answer/show/:id",
  requireAuth,
  answersController.detailAnswer_get
);

//to add the new Answer for a question in the Database.
router.post(
  "/:userid/:id/answer/new",
  requireAuth,
  answersController.newAnswerPost
);
