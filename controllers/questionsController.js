const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Question = require("../models/Question");

// controller actions
module.exports.allquestion_get = (req, res) => {
  Question.find((err, allquestions) => {
    if (err) {
      console.log(err);
    } else {
      console.log(allquestions);
      res.render("smoothies");
      // , { question: allquestions });
    }
  });
};

module.exports.newquestion_get = (req, res) => {
  res.render("questions/UpdateQuestionList");
};

//adding a new Question to dataset.
module.exports.newquestion_post = async (req, res) => {
  const { topic, link } = req.body;

  //to access the (user - id) while using JWT token , first decode it : spent 2hrs on figuring out this.
  const token = req.cookies.jwt;
  const user = jwt.verify(token, "net ninja secret");
  var author = {
    id: user.id,
  };
  const newQuestion = new Question({
    title: topic,
    author: author,
    link: link,
  });
  Question.insertMany(newQuestion, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json({ questionID: newQuestion._id });
    }
  });
};

//find the question with provided ID and show its detail , with answers related to this question
module.exports.detailQuestion_get = (req, res) => {
  Question.findById(req.params.id)
    .populate("answers")
    .exec((err, foundquestion) => {
      if (err) {
        console.log(err);
      } else {
        //render show template with that Question
        res.render("questions/QuestionDisplay", { question: foundquestion });
      }
    });
};
