import { Theme } from "@/src/colors";
import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function ItemDetailPage() {
    const { id } = useLocalSearchParams(); // Get the dynamic parameter

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Item ID: {id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Theme.background,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: Theme.text
    },
});
