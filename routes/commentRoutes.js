const { Router } = require("express");
const commentController = require("../controllers/commentController");
const { requireAuth } = require("../middleware/authMiddleware");

const router = Router();

//to post a new comment for a particular question.
router.post("/new", commentController.newCommentPost);

//delete a comment by a user

//edit a comment by a user

module.exports = router;
