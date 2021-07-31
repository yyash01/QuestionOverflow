const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter Topic of Question"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  link: {
    type: String,
    required: true,
  },
  //the question created by a user who is writing it would not give
  answers: {
    type: Array,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Question", questionSchema);
