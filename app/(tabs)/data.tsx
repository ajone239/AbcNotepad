import React from 'react';
import { useSelector, } from 'react-redux';
import { selectEntries } from '../../src/entrySlice';
import { StyleSheet, View, FlatList } from 'react-native';
import EntryCard from '@/components/EntryCard';
import { Theme } from '@/src/colors';

const debug = true;

export default function AboutScreen() {
    const entries = useSelector(selectEntries)

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.cardListContainer}
                data={entries}
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
        flex: 1,
        backgroundColor: Theme.background,
        borderWidth: debug ? 1 : 0,
    },
    cardContainer: {
        flex: 1,
        padding: 2,
        borderRadius: 5,
        borderWidth: debug ? 1 : 0,
    },
});
