import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
	name: "Auth",
	initialState: {
		auth: localStorage.getItem("token") ? true : false,
	},
	reducers: {
		login(state, action) {
			const { name, email, image } = JSON.parse(action.payload);
			const user = { id: 20, name, email, image };
			state.auth = true;
			localStorage.setItem("token", JSON.stringify(user));
			if (!localStorage.getItem("blogs")) {
				localStorage.setItem("blogs", JSON.stringify([]));
			}
		},
		logout(state) {
			state.auth = false;
			localStorage.removeItem("token");
		},
	},
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice;
