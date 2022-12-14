import { createSlice } from "@reduxjs/toolkit";

const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: null,
    postId: null,
  },
  reducers: {
    setComment: (state, action) => {
      state.comments = action.payload.comments;
      state.comments = action.payload.postId;
    },
  },
});
