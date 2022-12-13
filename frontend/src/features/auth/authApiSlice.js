import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["User"],
    }),
    refresh: builder.mutation({
      query: () => ({
        url: "/auth/refresh",
        method: "POST",
        body: {
          refreshToken: localStorage.getItem("refresh"),
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation, useRefreshMutation } = authApiSlice;
