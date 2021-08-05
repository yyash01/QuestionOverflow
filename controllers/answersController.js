const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Answer = require("../models/Answer");

module.exports.newQ = (req, res) => {
  res.render("answers/new");
};
