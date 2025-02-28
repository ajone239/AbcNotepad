import { Theme } from '@/src/colors';
import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default function Chart() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Charts are cool!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.background,
    },
    text: {
        color: Theme.text,
    }
});

