const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  author: {
    id: {
      type: String,
    },
    link: {
      type: String,
    },
    name: {
      type: String,
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
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
});

const Answer = mongoose.model("answer", answerSchema);
module.exports = Answer;
