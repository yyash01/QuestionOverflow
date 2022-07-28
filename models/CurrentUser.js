const mongoose = require("mongoose");

const currentUserSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
});

const CurrentUser = mongoose.model("currentuser", currentUserSchema);

module.exports = CurrentUser;
