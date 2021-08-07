const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  link: {
    type: String,
    required: true,
  },
  // the question created by a user who is writing it would not give answer of it
  answers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Answer",
    },
  ],
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
