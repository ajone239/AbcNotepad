import { Theme } from "@/src/colors";
import { Stack } from "expo-router";


export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: Theme.accent,
                },
                headerShadowVisible: false,
                headerTintColor: Theme.textHold,
            }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="[id]" />
        </Stack>
    );
}


