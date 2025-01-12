import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';

import AsyncStorage from '@react-native-async-storage/async-storage';

import entryReducer from './entrySlice';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, entryReducer);

const store = configureStore({
    reducer: {
        entries: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor }
