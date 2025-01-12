import { Theme } from '@/src/colors';
import { clear } from '@/src/entrySlice';

import React from 'react';
import { StyleSheet, View, Text, Pressable, } from 'react-native';
import { useDispatch } from 'react-redux';

export default function AboutScreen() {
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>

            <Text style={styles.text}>An app to look at how you think.</Text>

            <Text style={styles.text}>By Austin Jones</Text>

            <View style={styles.buttonContainer}>
                <Pressable onPress={() => dispatch(clear())}>
                    <Text style={styles.text}>
                        Clear
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        margin: 5,
    },
    text: {
        margin: 5,
        color: Theme.text,
    },
    buttonContainer: {
        margin: 5,
        borderRadius: 5,
        backgroundColor: Theme.primary,
    },
});
