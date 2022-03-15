import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUser } from "./auth-operation";

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  token: null,
  isFetchingCurrentUser: false,
  errorMessage: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.errorMessage = null;
    },
    [register.rejected](state, action) {
      state.errorMessage = action.error.message;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.errorMessage = null;
    },
    [logIn.rejected](state, action) {
      state.errorMessage = action.error.message;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.token = null;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    }
  },
});

export default authSlice.reducer;
