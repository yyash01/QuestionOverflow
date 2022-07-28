const { Router } = require("express");
const answersController = require("../controllers/answersController");
const commentController = require("../controllers/commentController");
const { requireAuth } = require("../middleware/authMiddleware");

//made changes Router , {mergeParams: true} beacuse we need Question ID.
const router = Router({ mergeParams: true });

//to delete a answer of a question
router.post("/:userid/delete", requireAuth, answersController.delete_answer);

//to upvote a answer
router.post("/:userid/upvote", requireAuth, answersController.upvote_answer);

//to post a new comment for a particular answer.
router.post(
  "/:userid/:id/comment/new",
  requireAuth,
  commentController.newCommentPost
);

//show detail page for a pariticular answer
router.get(
  "/:userid/show/:id",
  requireAuth,
  answersController.detailAnswer_get
);
module.exports = router;
