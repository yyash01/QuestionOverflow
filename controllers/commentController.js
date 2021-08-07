const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Answer = require("../models/Answer");
const Question = require("../models/Question");
const Comment = require("../models/Comment");

module.exports.newCommentPost = (req, res) => {
  console.log(req.params.id);
  Answer.findById(req.params.id, function (err, answers) {
    if (err) {
      console.log(err);
      res.redirect("/");
    } else {
      const { topic } = req.body;
      //to access the (user - id) while using JWT token , first decode it
      const token = req.cookies.jwt;
      const user = jwt.verify(token, "net ninja secret");
      var author = {
        id: user.id,
      };
      const newComment = new Comment({
        topic: topic,
        author: author,
      });
      Comment.create(newComment, function (err, comment) {
        if (err) {
          console.log(err);
        } else {
          //save comment
          comment.save();
          answers.comments.push(comment);
          answers.save();
          res.status(200).json({ commentID: comment._id });
        }
      });
    }
  });
};
