import { createSelector } from "@reduxjs/toolkit";

import { selectFilter } from "../filters/selectors";

export const selectContact = (state) => state.contactsData.contacts;
export const selectContactLoading = (state) => state.contactsData.isLoading;
export const error = (state) => state.contactsData.error;
export const selectFilteredContacts = createSelector(
    [selectContact, selectFilter],
    (contacts, filter) => {
        console.log("Contacts in selector:", contacts); // має показати масив контактів
        if (Array.isArray(contacts)) {
            return contacts.filter((contact) =>
                contact.name.toLowerCase().includes(filter.toLowerCase().trim())
            );
        }
        return [];
    }
);
