import DisplayTextBox from "@/components/DisplayTextBox";
import { Theme } from "@/src/colors";
import { selectEntries } from "@/src/entrySlice";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function ItemDetailPage() {
    const entries = useSelector(selectEntries)
    const { id } = useLocalSearchParams();

    const entry = entries.find(e => e.dateCreated === id);

    if (!entry) {
        return (
            <View style={styles.containerContainer}>
                <Stack.Screen options={{ title: "Not Found" }} />
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text>
                            Entry not found.
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.containerContainer}>
            <View style={styles.container}>
                <Stack.Screen options={{
                    title: (new Date(entry.dateCreated)).toLocaleString()
                }} />
                <View style={styles.textContainer}>
                    <DisplayTextBox text={entry.activatingEvent} label="Activating Event:" />
                </View>
                <View style={styles.textContainer}>
                    <DisplayTextBox text={entry.belief} label="Beliefs:" />
                </View>
                <View style={styles.textContainer}>
                    <DisplayTextBox text={entry.consequences} label="Consequences:" />
                </View>
                <View style={styles.textContainer}>
                    <DisplayTextBox text={entry.forAllBs} label="Do all Bs help?" />
                </View>
                <View style={styles.textContainer}>
                    <DisplayTextBox text={entry.nextTime} label="What about next time?" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerContainer: {
        flex: 1,
        backgroundColor: Theme.background,
    },
    container: {
        flex: 1,
        margin: 10,
        alignItems: "flex-start",
    },
    textContainer: {
        width: '98%',
        flex: 1,
        color: Theme.text
    },
});
