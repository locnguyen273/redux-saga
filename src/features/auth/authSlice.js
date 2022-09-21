import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.logging = true;
    },
    loginSuccess(state, action) {
      state.logging = false;
    },
    loginFailed(state, action) {
      state.logging = false;
      state.currentUser = action.payload;
    },

    logout(state) { },
  },
});

//actions
export const authActions = authSlice.actions;
//selectors
//reducer
const authReducer = authSlice.reducer;
export default authReducer;