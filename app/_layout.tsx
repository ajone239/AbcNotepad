import { Provider } from "react-redux"
import { Stack } from "expo-router";
import { store, persistor } from "@/src/store"
import { PersistGate } from 'redux-persist/integration/react';


export default function RootLayout() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="+not-found" />
                </Stack>
            </PersistGate>
        </Provider>
    );
}

