import { Theme } from "@/src/colors";
import { useState } from "react";
import { StyleSheet, Pressable, View, Text, FlatList } from "react-native";

export interface SelectionDetails {
    label: string;
};

type Props = {
    details: SelectionDetails[];
    onSelected: (deets: SelectionDetails) => void;
};

export default function SegmentedSelector({ details, onSelected }: Props) {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    return (
        <FlatList
            style={styles.listContainer}
            data={details}
            horizontal={true}
            renderItem={({ item: detail, index }) => (
                <View style={
                    index == selectedIndex
                        ? styles.selectedButtonContainer
                        : styles.deselectedButtonContainer
                }>
                    <Pressable
                        style={styles.button}
                        onPress={() => {
                            onSelected(detail)
                            setSelectedIndex(index)
                        }}>
                        <Text style={
                            index == selectedIndex
                                ? styles.selectedText
                                : styles.deselectedText
                        }>
                            {detail.label}
                        </Text>
                    </Pressable>
                </View>
            )} />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: Theme.accent,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Theme.accent,
    },
    selectedButtonContainer: {
        padding: 5,
        backgroundColor: Theme.primary,
        borderColor: Theme.accent,
        borderLeftWidth: 2,
        borderRightWidth: 2,
    },
    deselectedButtonContainer: {
        padding: 5,
        backgroundColor: Theme.accent,
        borderColor: Theme.primary,
        borderLeftWidth: 2,
        borderRightWidth: 2,
    },
    button: {
        borderRadius: 5,
        width: 30,
        height: 20,
        alignContent: 'center',
        justifyContent: 'center',
    },
    selectedText: {
        color: Theme.text,
    },
    deselectedText: {
        color: Theme.accentText,
    }
});
