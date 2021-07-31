const User = require("../models/User");
const Question = require("../models/Question");

// controller actions
module.exports.newquestion_get = (req, res) => {
  res.render("UpdateQuestionList");
};

module.exports.newquestion_post = (req, res) => {
  const {} = req.body;
};
