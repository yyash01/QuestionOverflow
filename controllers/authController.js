const User = require("../models/User");
const CurrentUser = require("../models/CurrentUser");

module.exports.login_post = async (req, res) => {
  const id = req.body.googleId;

  //logging In the Current User
  await CurrentUser.findOne({ googleId: id }, (err, found) => {
    if (found) {
    } else {
      CurrentUser.insertMany({ googleId: id }, (err) => {
        if (err) {
          res.send(err);
        }
      });
    }
  });

  //If the User is not Registered - Register him/her.
  await User.findOne({ googleId: id }, (err, found) => {
    if (found) {
      res.send(found);
    } else {
      const NewUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        googleId: req.body.googleId,
        email: req.body.Email,
        imgurl: req.body.ImageURL,
        points: 0.0,
      });

      User.insertMany(NewUser, (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send(NewUser);
        }
      });
    }
  });
};

//logging Out the Current User
module.exports.logout_post = (req, res) => {
  const id = req.body.userId;
  CurrentUser.findOneAndRemove({ googleId: id }, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.locals.user = null;
      res.status(200).json({ msg: "success" });
    }
  });
};
