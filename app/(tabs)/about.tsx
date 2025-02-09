import { Theme } from '@/src/colors';
import { clear } from '@/src/entrySlice';

import React from 'react';
import { StyleSheet, View, Text, Pressable, Alert, Platform, } from 'react-native';
import { nativeApplicationVersion, nativeBuildVersion } from 'expo-application'


import { useDispatch } from 'react-redux';
import Section from '@/components/Section';

export default function AboutScreen() {
    const dispatch = useDispatch()
    const appVersion = `${nativeApplicationVersion}.${nativeBuildVersion}`


    const clearEntries = () => dispatch(clear());

    const alertClear = () => {
        Alert.alert(
            'Warning',
            'This will clear ALL of your entries. Do you wish to proceed?',
            [
                {
                    text: 'Yes',
                    onPress: clearEntries,
                },
                {
                    text: 'No',
                },
            ]
        );
    };



    return (
        <View style={styles.container}>
            <Section label='Description:'>
                <Text style={styles.text}>
                    Welcome to ABC Notebook -- a journalling app that aims to give easy access to the ABC model of Albert Ellis from CBT.
                </Text>
            </Section>

            <Section label='Settings:'>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={Platform.OS === 'web' ? clearEntries : alertClear}>
                        <Text style={styles.buttonText}>
                            Clear Entry Data
                        </Text>
                    </Pressable>
                </View>
            </Section>

            <Section label='App Info:'>
                <View style={styles.dockPanel}>
                    <Text style={styles.leftText}>Created By:</Text>
                    <Text style={styles.rightText}>Austin Jones</Text>
                </View>
                <View style={styles.dockPanel}>
                    <Text style={styles.leftText}>Version:</Text>
                    <Text style={styles.rightText}>{appVersion}</Text>
                </View>
            </Section>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
