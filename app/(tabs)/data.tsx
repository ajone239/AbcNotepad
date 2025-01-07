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
                    <View>
                        <Text>test!</Text>
                        <Text>{item.activatingEvent}</Text>
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
    text: {
        color: '#fff',
    },
});
