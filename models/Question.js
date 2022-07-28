const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    id: {
      type: String,
      required: true,
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
      ref: "answer",
    },
  ],
  query: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Question = mongoose.model("question", questionSchema);

module.exports = Question;
