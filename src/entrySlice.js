import { createSlice } from '@reduxjs/toolkit'

export const entrySlice = createSlice({
    name: 'entries',
    initialState: {
        value: [],
    },
    reducers: {
        add: (state, action) => {
            state.value = [...state.value, action.payload]
        }
    }
});


export const { add } = entrySlice.actions;

export const selectEntries = (state) => state.entries.value;

export default entrySlice.reducer;
