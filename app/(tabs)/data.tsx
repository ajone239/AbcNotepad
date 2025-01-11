import React from 'react';
import { useSelector, } from 'react-redux';
import { selectEntries } from '../../src/entrySlice';
import { StyleSheet, View, Text, FlatList } from 'react-native';

export default function AboutScreen() {
    const entries = useSelector(selectEntries)

    return (
        <View style={styles.container}>
            <FlatList
                data={entries}
                renderItem={({ item }) =>
                    // TODO(austin.jones):make this pretty
                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>{item.dateCreated?.toString()}</Text>
                        <Text style={styles.text}>{item.activatingEvent}</Text>
                        <Text style={styles.text}>{item.belief}</Text>
                        <Text style={styles.text}>{item.consequences}</Text>
                        <Text style={styles.text}>{item.forAllBs}</Text>
                        <Text style={styles.text}>{item.nextTime}</Text>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        margin: 5,
        flex: 1,
        backgroundColor: '#333333',
    },
    text: {
        color: '#fff',
    },
});
