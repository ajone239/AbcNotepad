import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from '../../src/counterSlice';

import { StyleSheet, View, Text, Button } from 'react-native';


export default function AboutScreen() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Redux Example</Text>
            <Text style={styles.text}>Count: {count}</Text>
            <View style={styles.button}>
                <Button title="Increment" onPress={() => dispatch(increment())} />
            </View>
            <View style={styles.button}>
                <Button title="Decrement" onPress={() => dispatch(decrement())} />
            </View>
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
