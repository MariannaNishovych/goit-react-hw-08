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
            state.error = false;
            state.loading = true;
        })
        .addMatcher(isAnyOf(fetchContacts.rejected, deleteContact.rejected, addContact.rejected), (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
        .addMatcher(isAnyOf(fetchContacts.fulfilled, deleteContact.fulfilled, addContact.fulfilled), (state) => {
            state.loading = false;
        })
    }
});


export const contactsReducer = contactsSlice.reducer;
// export default contactsSlice.reducer;