const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  votes: {
    type: Number,
    default: 0,
  },
});

const Answer = mongoose.model("Answer", answerSchema);
module.exports = Answer;
