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

const authConfig = {
  key: "auth",
  storage,
    whitelist: ["token"]
};

import authModule from "./auth/slice";
import  contactsModule from "./contacts/slice";
import filtersModule  from "./filters/slice";

export const store = configureStore({
	reducer: {
		authData: persistReducer(authConfig, authModule.authReducer),
    filtersData: filtersModule.filtersReducer,
    contactsData : contactsModule.contactsReducer
	},
	middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
     }),
});

export const persistor = persistStore(store);