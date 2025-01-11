import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import counterReducer from './counterSlice';
import entryReducer from './entrySlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, entryReducer);

const store = configureStore({
    reducer: {
        counter: counterReducer,
        entries: persistedReducer,
    }
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor }
