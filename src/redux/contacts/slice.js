import { createSlice } from "@reduxjs/toolkit";

import apiModule from "../contacts/operations";

const {
	apiGetContacts,
	apiPostContact,
	apiDeleteContact
} = apiModule;

const INITIAL_STATE = {
	contacts: null,
	isLoading: false,
	error: null
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState: INITIAL_STATE,
	extraReducers: (builder) => {
		builder
			.addCase(apiGetContacts.pending, (state) => {
			state.isLoading = true,
			state.error = null
		})
			.addCase(apiGetContacts.fulfilled, (state, action) => {
			state.isLoading = false,
			state.contacts = action.payload
		})
		     .addCase(apiGetContacts.rejected, (state, action) => {
			state.isLoading = false,
			state.error = action.payload
		 })
			.addCase(apiPostContact.pending, (state) => {
			state.isLoading = true,
			state.error = null
		})
			.addCase(apiPostContact.fulfilled, (state, action) => {
				state.isLoading = false,
				state.contacts.push(action.payload);
		})
		     .addCase(apiPostContact.rejected, (state, action) => {
			     state.isLoading = false
			     state.error = action.payload;
		})
			.addCase(apiDeleteContact.pending, (state) => {
			      state.isLoading = true,
			      state.error = null
		})
			.addCase(apiDeleteContact.fulfilled, (state, action) => {
                        state.isLoading = false;
				state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
            })
		     .addCase(apiDeleteContact.rejected, (state, action) => {
			      state.isLoading = false,
			      state.error= action.payload
		})
		
	}
});

const contactsReducer = contactsSlice.reducer;

export default {
	contactsReducer,
	apiGetContacts,
	apiPostContact,
	apiDeleteContact
}