import { apiSlice } from "../../app/api/apiSlice";

const postApiSlice = apiSlice.injectEndpoints({
  providesTags: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: "/posts/",
        method: "GET",
      }),
      providesTags: ["Post"],
      invalidatesTags: ["Post"],
    }),
    getPost: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "GET",
      }),
      providesTags: ["Post"],
      invalidatesTags: ["Post"],
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: "/posts/",
        method: "POST",
        body,
      }),
      providesTags: ["Post"],
      invalidatesTags: ["Post"],
    }),
    updatePost: builder.mutation({
      query: (id, body) => ({
        url: `/posts/${id}`,
        method: "PATCH",
        body,
      }),
      providesTags: ["Post"],
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      providesTags: ["Post"],
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery, useCreatePostMutation,useUpdatePostMutation,useDeletePostMutation } =
  postApiSlice;
