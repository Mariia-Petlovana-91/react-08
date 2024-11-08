import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const contactsConfig = {
  key: "contactsKey",
  storage,
    whitelist: ["tocen"]
};

import  contactsModule from "./contacts/slice";
import filtersModule  from "./filters/slice";

export const store = configureStore({
	reducer: {
		contactsData: persistReducer(contactsConfig, contactsModule.contactsReducer),
		filtersData: filtersModule.filtersReducer
	},
	middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
     }),
});

export const persistor = persistStore(store);