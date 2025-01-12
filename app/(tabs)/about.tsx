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
            <Pressable onPress={() => dispatch(clear())}>
                <Text style={styles.text}>
                    Clear
                </Text>
            </Pressable>
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
    button: {
        margin: 5,
    },
    text: {
        color: '#fff',
    },
});
