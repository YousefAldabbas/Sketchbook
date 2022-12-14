import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, tokens } = action.payload;
      state.user = user;
      state.token = tokens.accessToken;
      if (action.payload.tokens.refreshToken)
        localStorage.setItem("refresh", action.payload.tokens.refreshToken);
    },
    refreshToken: (state, action) => {
      const { accessToken } = action.payload.tokens;
      state.token = accessToken;

      // if (!state.user) {
      //   state.user = {
      //     username: JSON.stringify(localStorage.getItem("username")),
      //     email: JSON.stringify(localStorage.getItem("email")),
      //   };
      // }
    },

    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("refresh");
    },
  },
});

export const { setCredentials, logOut, refreshToken } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
