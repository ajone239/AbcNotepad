import { Tabs } from 'expo-router'

import Ionicons from '@expo/vector-icons/Ionicons'
import { Theme } from '@/src/colors'

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Theme.primary,
                tabBarInactiveTintColor: Theme.accent,
                headerStyle: {
                    backgroundColor: Theme.background,
                },
                headerShadowVisible: false,
                headerTintColor: Theme.text,
                tabBarStyle: {
                    backgroundColor: Theme.background,
                },
            }}
        >
            <Tabs.Screen
                name="data"
                options={{
                    title: 'Log',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'git-branch' : 'git-branch-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />

            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    )
};

