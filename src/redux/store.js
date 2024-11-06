import { configureStore } from "@reduxjs/toolkit";

import  contactsModule from "./contacts/slice";
import filtersModule  from "./filters/slice";

export const store = configureStore({
	reducer: {
		contactsData:  contactsModule.contactsReducer,
		filtersData: filtersModule.filtersReducer
	},

});

export default store;