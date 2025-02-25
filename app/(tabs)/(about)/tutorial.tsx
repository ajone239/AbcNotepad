import { Theme } from '@/src/colors';

import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';


import Section from '@/components/Section';


export default function InfoScreen() {
    return (
        <ScrollView style={styles.container}>
            <Section label='NOTE:'>
                <Text style={styles.text}>
                    This is just use for theory see "Background Info".
                </Text>
            </Section>
            <Section label='How to use:'>
                <Text style={styles.text}>
                    {`
As soon as you feel like you need to record an ABC Entry:

In the order of significance to your experience, answer the following questions in the 3 main input boxes.

A. What was the Activating event?
B. What are your Beliefs about this event?
C. What are the Consequences of those beliefs.

With that done, use the next 2 input boxes to reflect on your experience with these questions.

- Are all the beliefs in B realistic or helpful?
- What can we do next time A happens?

You can now submit. Great Job!
                    `}
                </Text>
            </Section>
            <Section label='Things to remember:'>
                <Text style={styles.text}>
                    {`
- Keep entries short don't explain your way out of a feeling.
- Be honest about what you think and feel.
- Give yourself grace.
- It will be okay <3
                    `}
                </Text>
            </Section>
        </ScrollView>
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
