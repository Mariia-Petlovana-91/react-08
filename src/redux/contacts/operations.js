import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import toast from "react-hot-toast";

const {
	getContacts,
	addContact,
	deleteContact,
} = api;

const apiGetContacts =createAsyncThunk(
	"contacts/fetchAll",
	async (_, thunkApi) => {
		try {
			const data = await getContacts();
			return data;
		} catch (error) {
			toast.error("No contacts found.😔 Try again later.");
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

const apiPostContact =createAsyncThunk(
	"contacts/addContact",
	async (contactData, thunkApi) => {
		try {
			const data = await addContact(contactData);
			return data;
		} catch (error) {
			toast.error(`Failed to add contact.🤷‍♀️Try again later.`);
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

const apiDeleteContact =createAsyncThunk(
	"contact/deleteContact",
	async (id, thunkApi) => {
		try {
			const data = await deleteContact(id);
			return data;
		} catch (error) {
			toast.error(`Failed to delete contact.🙄Try again later.${error}`);
			return thunkApi.rejectWithValue(error.message);
		}
	}
);



export default {
	apiGetContacts,
	apiPostContact,
	apiDeleteContact
} ;
