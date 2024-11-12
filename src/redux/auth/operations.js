import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import toast from "react-hot-toast";


const {
	registrationUser,
	logInUser,
	logOutUser,
	getUser,
	setToken
} = api;

const apiRegistrationUser = createAsyncThunk(
	"auth/register",
	async (userData, thunkApi) => {
		try {
			const data = await registrationUser(userData);
			return data;
		} catch (error) {
			toast.error('Failed to register.😔 Try again later.');
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

const apiLoginUser = createAsyncThunk(
	"auth/login",
	async (userData, thunkApi) => {
		try {
			const data = await logInUser(userData);
			return data;
		} catch (error) {
			toast.error('Failed to LogIn.😔 Try again later.');
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

const apiLogOutUser = createAsyncThunk(
	"auth/logout",
	async (_, thunkApi) => {
		try {
			const data = await logOutUser();
			return data;
		} catch (error) {
			toast.error('Failed to LogOut.😔 Try again later.');
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

const apiGetUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const token = state.authData.token;

        if (!token) {
            console.error("Token is missing or invalid.");
            return thunkApi.rejectWithValue("Invalid token");
        }
       
	    try {
            setToken(token);
            const data = await getUser();
            return data;
        } catch (error) {
            toast.error('The user could not be found.😔 Try again later.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);





export default {
	apiRegistrationUser,
	apiLoginUser,
	apiLogOutUser,
	apiGetUser
} ;