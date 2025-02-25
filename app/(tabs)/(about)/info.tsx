import { Theme } from '@/src/colors';

import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';


import Section from '@/components/Section';

export default function InfoScreen() {
    return (
        <ScrollView style={styles.container}>
            <Section label='What is this app:'>
                <Text style={styles.text}>
                    {`
Welcome to ABC Notebook -- a journalling app that aims to give easy access to the ABC model of Albert Ellis from CBT.
                    `}
                </Text>
            </Section>

            <Section label='What is CBT:'>
                <Text style={styles.text}>
                    {`
Cognitive Behavioral Therapy operates under the tagline "change your thoughts -- change your emotions".

You change your thoughts by observing them and working at correction. You change your emotions to not be so dang depressed all the time.
                    `}
                </Text>
            </Section>

            <Section label='What is ABC:'>
                <Text style={styles.text}>
                    {`
ABC is a journaling tactic for helping with CBT.
The through shot is "something has happened and you don't like how it made you feel let's look at it"

Therein it opens with three questions:

A. What was the Activating event?

    An Activating event (sometimes referered to as an adversity) is a bad thing that has happened: a bad grade, a hard meeting, or what have you. This event is the thing that ultimately leads to the later Consequences.

B. What are your Beliefs about this event?

    Beliefs are many things, but for our purposes here they are thoughts about or surrounding the event that started this entry.

C. What are the Consequences of those beliefs.

    The Consequences are the bad things that come from our beliefs of the adversity. These are the things that we ultimately don't want to change.

It can be useful to take these down out of order. It is helpful to take them down in the order of importance to the experience. You may be experience may bad emotions, so you take down your "C" then introspect to find the Activating event and corresponding beliefs. Something clearly bad may happen (your "A") then you can use "B" and "C" to process it -- Ad nauseam.

Now that we have that in the paper, we can ask 2 incisive questions:

- Are all the beliefs in B realistic or helpful?
- What can we do next time A happens?
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
