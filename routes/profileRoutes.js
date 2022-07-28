const { Router } = require("express");
const User = require("../models/User");
const answersController = require("../controllers/answersController");
const questionsController = require("../controllers/questionsController");
const { requireAuth } = require("../middleware/authMiddleware");
const router = Router({ mergeParams: true });

//show a Profile of the User having googId = userid
router.get("/:userid", requireAuth, (req, res) => {
  User.findOne({ googleId: req.params.userid })
    .populate(["answers", "questions"])
    .exec((err, userfound) => {
      if (err) {
        console.log(err);
      } else {
        res.render("profile", { userOP: userfound });
      }
    });
});

// To get the User answeres.
router.get(
  "/:userid/answer/show/:id",
  requireAuth,
  answersController.detailAnswer_get
);

//To get the User Asked Questions.
router.get(
  "/:userid/question/:id",
  requireAuth,
  questionsController.detailQuestion_get
);
module.exports = router;
