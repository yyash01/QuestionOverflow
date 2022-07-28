const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Answer = require("../models/Answer");
const Question = require("../models/Question");
const Comment = require("../models/Comment");

module.exports.newCommentPost = async (req, res) => {
  let userData = await User.findOne({ googleId: req.params.userid });
  Answer.findById(req.params.id, function (err, answers) {
    if (err) {
      console.log(err);
    } else {
      const { topic } = req.body;
      var author = {
        id: req.params.userid,
        name: userData.firstName,
      };
      const newComment = new Comment({
        topic: topic,
        author: author,
      });
      Comment.create(newComment, function (err, comment) {
        if (err) {
          console.log(err);
        } else {
          comment.save();
          answers.comments.push(comment);
          answers.save();
          res.status(200).json({ commentID: comment._id });
        }
      });
    }
  });
};

module.exports.delete_comment = (req, res) => {
  Comment.findByIdAndRemove(req.body.commentID, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ msg: "success" });
    }
  });
};
