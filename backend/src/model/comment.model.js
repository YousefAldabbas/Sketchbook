import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    comment: {
      type: String,
      required: true,
    },
    replays: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  },
  {
    timestamps: true,
  }
);

const CommentModel = mongoose.model("Comment", commentSchema);

export default CommentModel;
