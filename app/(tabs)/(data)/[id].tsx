import DisplayTextBox from "@/components/DisplayTextBox";
import { Theme } from "@/src/colors";
import { selectEntries } from "@/src/entrySlice";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function ItemDetailPage() {
    const entries = useSelector(selectEntries)
    const { id } = useLocalSearchParams();


    const entry = entries.filter(e => e.dateCreated == id)[0];

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
