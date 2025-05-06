import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    auth: localStorage.getItem("token") ? true : false,
  },
  reducers: {
    login(state, action) {
      console.log(action.payload, "action.payload");
      state.auth = true;
      localStorage.setItem(
        "token",
        // JSON.stringify({ id: 20, ...action.payload })
        JSON.stringify({ id: 20, ...action.payload })
      );
    },
    logout(state) {
      state.auth = false;
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice;
