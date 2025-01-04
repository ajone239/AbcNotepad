import { Provider } from "react-redux"
import { Stack } from "expo-router";
import { store } from "../src/store"

export default function RootLayout() {
    return (
        <Provider store={store}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack>
        </Provider>
    );
}

