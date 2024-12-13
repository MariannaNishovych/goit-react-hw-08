import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";


export const selectNameFilter = state => state.filter.name;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter], (contacts, filter) => {
        return contacts.filter((contact) => {
            return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    }
);