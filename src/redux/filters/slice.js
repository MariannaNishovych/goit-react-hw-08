import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
};

const filtersSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterValue(state, action) {
            state.name = action.payload;
        },
    },
});

export const filterReducer = filtersSlice.reducer;

export const { setFilterValue } = filtersSlice.actions;