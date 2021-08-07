const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
