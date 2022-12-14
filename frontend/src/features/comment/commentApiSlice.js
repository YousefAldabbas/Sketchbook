import { apiSlice } from "../../app/api/apiSlice";

const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (id) => ({
        url: `/posts/${id}/comments`,
      }),
      invalidatesTags: ["Comment"],
    }),
  }),
});

export const { useGetCommentsQuery } = commentApiSlice;
