import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';
import { logOut } from '../auth/operations';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,

    extraReducers: (builder) => {
        builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
state.items = state.items.filter(item => item.id !== action.payload.id);
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })
        .addCase (logOut.fulfilled, () => {
            return initialState;
        })
        .addMatcher(isAnyOf(fetchContacts.pending, deleteContact.pending, addContact.pending), (state) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addMatcher(isAnyOf(fetchContacts.rejected, deleteContact.rejected, addContact.rejected), (state, action) => {
            state.isError = action.payload;
            state.isLoading = false;
        })
        .addMatcher(isAnyOf(fetchContacts.fulfilled, deleteContact.fulfilled, addContact.fulfilled), (state) => {
            state.isLoading = false;
        })
    }
});


export const contactsReducer = contactsSlice.reducer;
export default contactsSlice.reducer;