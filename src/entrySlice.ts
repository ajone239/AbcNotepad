import { AbcEntry } from "./AbcEntry";
import { RootState } from "./store";
import { createSlice } from '@reduxjs/toolkit'


export interface EntrySliceState {
    value: AbcEntry[],
}

const initialState: EntrySliceState = {
    value: [],
}

export const entrySlice = createSlice({
    name: 'entries',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.value = [action.payload, ...state.value]
        },
        clear: (state) => {
            state.value = []
        }
    }
});

export const { add, clear } = entrySlice.actions;

export const selectEntries = (state: RootState) => state.entries.value;

export default entrySlice.reducer;
