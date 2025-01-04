import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from '../../src/counterSlice';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function AboutScreen() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch();


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Redux Example</Text>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={() => dispatch(increment())} />
            <Button title="Decrement" onPress={() => dispatch(decrement())} />
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
