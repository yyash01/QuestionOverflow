const { Router } = require("express");
const User = require("../models/User");
const answersController = require("../controllers/answersController");
const questionsController = require("../controllers/questionsController");
const { requireAuth } = require("../middleware/authMiddleware");
const router = Router();

//show a user.
router.get("/:id", requireAuth, (req, res) => {
  User.findById(req.params.id)
    .populate(["answers", "questions"])
    .exec((err, userfound) => {
      if (err) {
        console.log(err);
      } else {
        res.render("profile", { userOP: userfound });
      }
    });
});

router.get("/answer/show/:id", requireAuth, answersController.detailAnswer_get);
router.get(
  "/question/:id",
  requireAuth,
  questionsController.detailQuestion_get
);
module.exports = router;

(req, res) => res.render("profile");
