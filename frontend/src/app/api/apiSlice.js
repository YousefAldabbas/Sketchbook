import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  setCredentials,
  logOut,
  refreshToken,
} from "../../features/auth/authSlice";

import axios from "axios";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:1337",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const refreshQuery = fetchBaseQuery({
  baseUrl: "http://localhost:1337",
  method: "POST",
  body: {
    refreshToken: localStorage.getItem("refresh"),
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 409 || result?.error?.status === 401) {
    const refreshResult = await axios.post(
      "http://localhost:1337/auth/refresh",
      {
        refreshToken: localStorage.getItem("refresh"),
      }
    );

    // fetch("http://localhost:1337/auth/refresh", {
    //   method: "POST",
    //   mode: "no-cors",
    //   body: {
    //     refreshToken: JSON.stringify(localStorage.getItem("refresh")),
    //   },
    // });
    if (refreshResult?.data) {
      // const user = api.getState().auth.user;
      //  store new token
      api.dispatch(refreshToken(refreshResult.data));
      // retry the original query with the new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut);
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Data","Todos"],
  endpoints: (builder) => ({}),
});
