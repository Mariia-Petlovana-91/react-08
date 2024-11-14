import { createSlice } from "@reduxjs/toolkit";

import apiModule from "../auth/operations";

const {
	apiRegistrationUser,
	apiLoginUser,
	apiLogOutUser,
	apiGetUser
} = apiModule;


const INITIAL_STATE = {
	user: {
        name: null,
        email: null,
      },
      token: null,
      isLoggedIn: false,
	isRefreshing: false,
	error: null,
	isLoading:false,
};

const authSlice = createSlice({
	name: "auth",
	initialState: INITIAL_STATE,
	extraReducers: (builder) => {
		builder
		.addCase(apiRegistrationUser.pending, (state) => {
			state.isLoading = true,
			state.error = null
		})
		.addCase(apiRegistrationUser.fulfilled, (state, action) => {
			state.isLoading = false,
			state.isLoggedIn = true,
			state.token = action.payload.token,
			state.user = action.payload.user
		})
		.addCase(apiRegistrationUser.rejected, (state, action) => {
			state.isLoading = false,
			state.error = action.payload
		}) 
		.addCase(apiLoginUser.pending, (state) => {
			state.isLoading = true,
			state.error = null
		})
		.addCase(apiLoginUser.fulfilled, (state, action) => {
			state.isLoading = false,
			state.isLoggedIn = true,
			state.token = action.payload.token,
			state.user = action.payload.user
		})
		.addCase(apiLoginUser.rejected, (state, action) => {
			state.isLoading = false,
			state.error = action.payload
		}) 
		.addCase(apiLogOutUser.pending, (state) => {
			state.isLoading = true,
			state.error = null
		})
		.addCase(apiLogOutUser.fulfilled, (state, action) => {
			state.isLoading = false,
			state.isLoggedIn = false,
			state.token = action.payload.token,
			state.user = action.payload
		})
		.addCase(apiLogOutUser.rejected, (state, action) => {
			state.isLoading = false,
			state.error = action.payload
		})
		.addCase(apiGetUser.pending, (state) => {
			state.isRefreshing =true,
			state.error = null
		})
		.addCase(apiGetUser.fulfilled, (state, action) => {
			state.isRefreshing =false,
			state.isLoggedIn = true,
			state.user = action.payload
		})
		.addCase(apiGetUser.rejected, (state, action) => {
			state.isRefreshing =false,
			state.error = action.payload
		 })
	}
});

const authReducer = authSlice.reducer;

export default authReducer;

export {
	apiRegistrationUser,
	apiLoginUser,
	apiLogOutUser,
	apiGetUser
}