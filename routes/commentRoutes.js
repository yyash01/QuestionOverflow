const { Router } = require("express");
const commentController = require("../controllers/commentController");
const { requireAuth } = require("../middleware/authMiddleware");

const router = Router({ mergeParams: true });

//delete a comment by a user
router.post("/:userid/delete", requireAuth, commentController.delete_comment);

module.exports = router;
