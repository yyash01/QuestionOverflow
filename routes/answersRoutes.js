const { Router } = require("express");
const answersController = require("../controllers/answersController");
const { requireAuth } = require("../middleware/authMiddleware");

//made changes Router , {mergeParams: true} beacuse we need Question ID.
const router = Router({ mergeParams: true });

//show text-editor when someone wants to post a Answer
router.get("/new", requireAuth, answersController.newQ);
router.post("/new", answersController.newAnswerPost);

router.get("/show/:id", answersController.detailAnswer_get);

//to delete a answer of a question
router.post("/delete", answersController.delete_answer);

module.exports = router;
