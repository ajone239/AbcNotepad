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
            <Stack.Screen name="index" options={{
                title: "About",
                headerShown: false
            }} />
            <Stack.Screen name="info" options={{ title: "Background Info" }} />
            <Stack.Screen name="tutorial" options={{ title: "App Tutorial" }} />
        </Stack>
    );
}


