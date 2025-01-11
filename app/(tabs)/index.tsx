import MainInputBox from "@/components/MainInputBox";
import OtherInputBox from "@/components/OtherInputBox";
import { add } from '@/src/entrySlice';
import { AbcEntry } from "@/src/AbcEntry";
import CircleButton from "@/components/CircleButton";

import { useState } from "react";
import { useDispatch } from 'react-redux';
import {
    StyleSheet,
    View,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Theme } from "@/src/colors";

export default function Index() {
    const dispatch = useDispatch()

    const [activatingEventText, setActivatingEventText] = useState<string>("")
    const [beliefText, setBeliefText] = useState<string>("")
    const [consequencesText, setConsequencesText] = useState<string>("")
    const [forAllBsText, setForAllBsText] = useState<string>("")
    const [nextTimeText, setNextTimeText] = useState<string>("")

    const [canSubmit, setCanSubmit] = useState<boolean>(false)

    const allTextIsSet = () => {
        return activatingEventText.length > 0 &&
            beliefText.length > 0 &&
            consequencesText.length > 0 &&
            forAllBsText.length > 0 &&
            nextTimeText.length > 0;
    }

    const clearForm = () => {
        setActivatingEventText("");
        setBeliefText("");
        setConsequencesText("");
        setForAllBsText("");
        setNextTimeText("");
    }

    const acceptEntry = () => {
        const abc: AbcEntry = {
            activatingEvent: activatingEventText,
            belief: beliefText,
            consequences: consequencesText,
            forAllBs: forAllBsText,
            nextTime: nextTimeText,
            dateCreated: new Date(),
        }
        dispatch(add(abc))
        clearForm();
    };

    return (
        <KeyboardAwareScrollView
            style={styles.container}
            extraScrollHeight={40} // Adjust as needed
        >
            <View style={styles.inner}>
                <View style={styles.input} >
                    <MainInputBox
                        text={activatingEventText}
                        label="A:"
                        onTextChanged={(text: string) => {
                            setActivatingEventText(text)
                            setCanSubmit(allTextIsSet())
                        }}
                        placeHolder="What happened?"
                    />
                </View>

                <View style={styles.input} >
                    <MainInputBox
                        text={beliefText}
                        label="B:"
                        onTextChanged={(text: string) => {
                            setBeliefText(text)
                            setCanSubmit(allTextIsSet())
                        }}
                        placeHolder="What are your beliefs for the event?"
                    />
                </View>

                <View style={styles.input} >
                    <MainInputBox
                        text={consequencesText}
                        label="C:"
                        onTextChanged={(text: string) => {
                            setConsequencesText(text)
                            setCanSubmit(allTextIsSet())
                        }}
                        placeHolder="What are the consequences?"
                    />
                </View>

                <View style={styles.input} >
                    <OtherInputBox
                        text={forAllBsText}
                        label="For all b in B: b.helpful || b.realistic:"
                        onTextChanged={(text: string) => {
                            setForAllBsText(text)
                            setCanSubmit(allTextIsSet())
                        }}
                        placeHolder="Think for a friend"
                    />
                </View>

                <View style={styles.input} >
                    <OtherInputBox
                        text={nextTimeText}
                        label="What will you do next time?"
                        onTextChanged={(text: string) => {
                            setNextTimeText(text)
                            setCanSubmit(allTextIsSet())
                        }}
                        placeHolder="Plan here"
                    />
                </View>
            </View>

            <View style={styles.acceptButton}>
                <CircleButton
                    disabled={!allTextIsSet()}
                    onPress={acceptEntry} />
            </View>
        </KeyboardAwareScrollView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.background,
    },
    inner: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        width: '100%',
        padding: 2,
        borderRadius: 5,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center', // Adjusts for vertical alignment
        padding: 20,
    },
    acceptButton: {
        alignItems: 'flex-end',
        margin: 10,
    }
});

