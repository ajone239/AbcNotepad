import { Theme } from '@/src/colors';

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


import Section from '@/components/Section';

const tutorialText = `
NOTE: This is use for theory see "Background Info".


`


export default function InfoScreen() {
    return (
        <View style={styles.container}>
            <Section label='How to use:'>
                <Text style={styles.text}>
                    {tutorialText}
                </Text>
            </Section>
            <Section label='Things to remember:'>
                <Text style={styles.text}>
                    {`
- Keep entries short don't explain your way out of a feeling.
- Be honest about what you think and feel.
- Give yourself grace.
- It will be ok <3
                    `}
                </Text>
            </Section>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: Theme.background,
    },
    dockPanel: {
        flexDirection: 'row',
        alignContent: 'space-between',
    },
    leftText: {
        margin: 10,
        textAlign: 'left',
        color: Theme.text,
    },
    rightText: {
        margin: 10,
        flex: 1,
        textAlign: 'right',
        color: Theme.text,
    },
    text: {
        margin: 10,
        color: Theme.text,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.primary,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: Theme.accent,
        marginHorizontal: 30,
        marginVertical: 10,
    },
    buttonText: {
        alignItems: 'flex-end',
        color: Theme.text,
        margin: 10
    },
});
