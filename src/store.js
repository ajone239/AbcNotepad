import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import entryReducer from './entrySlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        entries: entryReducer
    }
});
