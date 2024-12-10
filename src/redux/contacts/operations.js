import { createAsyncThunk } from "@reduxjs/toolkit";

import { goitApi } from "../auth/operations";


// axios.defaults.baseURL='https://connections-api.goit.global/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async(_, thunkAPI) => {
    try {
        const response = await goitApi.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(id, thunkAPI) => {
    try {
        const response = await goitApi.delete(`/contacts/${id}`)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async(newContact, thunkAPI) => {
    try {
        const response = await goitApi.post('/contacts', {
            name: newContact.name,
            number: newContact.number,
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

