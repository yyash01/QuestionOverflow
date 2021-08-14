const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Answer = require("../models/Answer");
const Question = require("../models/Question");
const Comment = require("../models/Comment");

module.exports.newCommentPost = async (req, res) => {
  //to access the (user - id) while using JWT token , first decode it
  const token = req.cookies.jwt;
  const user = jwt.verify(token, "net ninja secret");
  let userData = await User.findById(user.id);
  Answer.findById(req.params.id, function (err, answers) {
    if (err) {
      console.log(err);
      res.redirect("/");
    } else {
      const { topic } = req.body;
      var author = {
        id: user.id,
        name: userData.username,
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
          // res.redirect(307, `/answer/show/${answers._id}`);
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
