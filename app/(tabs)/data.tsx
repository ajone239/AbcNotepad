import React, { useState } from 'react';
import { useSelector, } from 'react-redux';
import { selectEntries } from '@/src/entrySlice';
import { StyleSheet, View, FlatList, TextInput } from 'react-native';
import EntryCard from '@/components/EntryCard';
import { Theme } from '@/src/colors';
import { AbcEntry } from '@/src/AbcEntry';

const debug = false;
const maxLength = 100;
const searchPlaceHolder = "Search here"

export default function AboutScreen() {
    const entries = useSelector(selectEntries)
    const [searchText, setSearchText] = useState<string>("")

    const onTextChanged = (text: string) => {
        setSearchText(text)
    }

    const filteredEntries = entries.filter((entry: AbcEntry) => {
        return entry.activatingEvent.toLowerCase().includes(searchText.toLowerCase()) ||
            entry.belief.toLowerCase().includes(searchText.toLowerCase()) ||
            entry.consequences.toLowerCase().includes(searchText.toLowerCase()) ||
            entry.forAllBs.toLowerCase().includes(searchText.toLowerCase()) ||
            entry.nextTime.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    multiline={true}
                    style={styles.searchText}
                    maxLength={maxLength}
                    onChangeText={onTextChanged}
                    placeholder={searchPlaceHolder}
                    placeholderTextColor={Theme.accentTextHold}
                    value={searchText} />
            </View>

            <FlatList
                contentContainerStyle={styles.cardListContainer}
                data={filteredEntries}
                renderItem={({ item: model }) => {
                    return (
                        <View style={styles.cardContainer}>
                            <EntryCard model={model} />
                        </View>
                    )
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.background,
        borderWidth: debug ? 1 : 0,
    },
    cardListContainer: {
        backgroundColor: Theme.background,
        borderWidth: debug ? 1 : 0,
    },
    cardContainer: {
        flex: 1,
        padding: 2,
        borderRadius: 5,
        borderWidth: debug ? 1 : 0,
    },
    searchContainer: {
        borderRadius: 10,
        backgroundColor: Theme.accent,
        margin: 10,
        borderWidth: debug ? 1 : 0,
    },
    searchText: {
        borderRadius: 5,
        alignContent: "center",
        marginLeft: 5,
        marginRight: 5,
        color: Theme.accentText,
    },
});
