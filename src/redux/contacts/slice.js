import { createSlice } from "@reduxjs/toolkit";

import apiModule from "../contacts/operations";
import apiAuthModule from "../auth/operations";

const { apiLogOutUser } = apiAuthModule;

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
				console.log("Updating contacts in state:", action.payload);
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
			.addCase(apiLogOutUser.fulfilled, (state) => {
			     state.contacts = null,
				state.error = null
		})
		
	}
});

const contactsReducer = contactsSlice.reducer;

export default contactsReducer;
export {
	apiGetContacts,
	apiPostContact,
	apiDeleteContact
}