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
                    borderColor: Theme.textHold,
                    backgroundColor: Theme.background,
                    shadowColor: Theme.background,
                },
            }}
        >
            <Tabs.Screen
                name="(data)"
                options={{
                    title: 'Log',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'git-branch' : 'git-branch-outline'}
                            color={color}
                            size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Record',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'save' : 'save-outline'}
                            color={color}
                            size={24} />
                    ),
                }}
            />

            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'information-circle' : 'information-circle-outline'}
                            color={color}
                            size={24} />
                    ),
                }}
            />
        </Tabs>
    )
};

