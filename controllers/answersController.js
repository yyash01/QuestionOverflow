const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Answer = require("../models/Answer");
const Question = require("../models/Question");
const Comment = require("../models/Comment");

module.exports.newQ = (req, res) => {
  Question.findById(req.params.id, function (err, questions) {
    if (err) {
      console.log(err);
    } else {
      res.render("answers/new", { question: questions });
    }
  });
};

//to post a new Answer of A particular Question in Database.
module.exports.newAnswerPost = async (req, res) => {
  const token = req.cookies.jwt;
  const user = jwt.verify(token, "net ninja secret");
  let userData = await User.findById(user.id);
  //look For the Question using ID
  Question.findById(req.params.id, function (err, questions) {
    if (err) {
      console.log(err);
      res.redirect("/");
    } else {
      const { title, content } = req.body;
      //to access the (user - id) while using JWT token , first decode it : spent 2hrs on figuring out this.
      var author = {
        id: user.id,
        name: userData.username,
      };
      const newAnswer = new Answer({
        topic: title,
        content: content,
        author: author,
      });
      Answer.create(newAnswer, function (err, answer) {
        if (err) {
          console.log(err);
        } else {
          //save answer
          answer.save();
          questions.answers.push(answer);
          questions.save();
          userData.answers.push(answer);
          userData.save();
          res.status(200).json({ answerID: answer._id });
        }
      });
    }
  });
};

//find the Answer with provided ID and show its detail , with comments related to this Answer
module.exports.detailAnswer_get = (req, res) => {
  Answer.findById(req.params.id)
    .populate("comments")
    .exec((err, foundanswer) => {
      if (err) {
        console.log(err);
      } else {
        //render show template with that Question
        res.render("answers/show", { answer: foundanswer });
      }
    });
};
