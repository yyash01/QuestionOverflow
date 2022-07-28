const jwt = require("jsonwebtoken");
const User = require("../models/User");
const CurrentUser = require("../models/CurrentUser");

// check current user is loggedIn for every get/post request.
const requireAuth = async (req, res, next) => {
  const userid = req.params.userid;
  await CurrentUser.findOne({ googleId: userid }, (err, found) => {
    if (found) {
      res.locals.user = userid;
      next();
    } else {
      res.locals.user = null;
      res.redirect("/");
    }
  });
};

module.exports = { requireAuth };
