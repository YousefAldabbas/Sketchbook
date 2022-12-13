import { apiSlice } from "../../app/api/apiSlice";

const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: "/posts/",
        method: "GET",
      }),
      invalidatesTags: ["Post"],
    }),
    getPost: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = postApiSlice;
