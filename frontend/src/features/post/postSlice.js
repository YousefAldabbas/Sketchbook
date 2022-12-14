import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },

    setPost: (state, action) => {
      console.log(action.payload);
      state.posts.push(action.payload);
    },
  },
});

export const { setPosts, setPost } = postSlice.actions;
export default postSlice.reducer;

export const selectPosts = (state) => state.posts;
//  todo: selsct post param id res post
