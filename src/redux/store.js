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

import authReducer from "./auth/slice";
import  filtersReducer from "./filters/slice";
import contactsReducer  from "./contacts/slice";

export const store = configureStore({
	reducer: {
		authData: persistReducer(authConfig, authReducer),
    filtersData: filtersReducer,
    contactsData : contactsReducer
	},
	middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
     }),
});

export const persistor = persistStore(store);