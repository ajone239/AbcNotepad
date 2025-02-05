import { Theme } from "@/src/colors";
import { selectEntries } from "@/src/entrySlice";
import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function ItemDetailPage() {
    const entries = useSelector(selectEntries)
    const { id } = useLocalSearchParams();

    const entry = entries.filter(e => e.dateCreated == id)[0];

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{entry.dateCreated}</Text>
            <Text style={styles.text}>{entry.activatingEvent}</Text>
            <Text style={styles.text}>{entry.belief}</Text>
            <Text style={styles.text}>{entry.consequences}</Text>
            <Text style={styles.text}>{entry.forAllBs}</Text>
            <Text style={styles.text}>{entry.nextTime}</Text>
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
        color: Theme.text
    },
});
