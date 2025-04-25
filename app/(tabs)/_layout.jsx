// app/(tabs)/_layout.jsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useAuth } from "@clerk/clerk-expo";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function TabsLayout() {
    const { isSignedIn, isLoaded } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isLoaded && !isSignedIn) {
            router.replace("/login");
        }
    }, [isLoaded, isSignedIn]);

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.PRIMARY,
                tabBarLabelStyle: {
                    fontFamily: "outfit-medium",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="inbox"
                options={{
                    title: "Inbox",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbox-ellipses" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="favorite"
                options={{
                    title: "Favorite",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}