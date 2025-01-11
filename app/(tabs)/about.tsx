import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';


export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>An app to look at how you think.</Text>
            <Text style={styles.text}>By Austin Jones</Text>
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
