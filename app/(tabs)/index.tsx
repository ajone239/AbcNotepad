import MainInputBox from "@/components/MainInputBox";
import OtherInputBox from "@/components/OtherInputBox";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useState } from "react";
import { useDispatch } from 'react-redux';
import { add } from '@/src/entrySlice';
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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

    return (
        <KeyboardAwareScrollView
            style={styles.container}
            extraScrollHeight={40} // Adjust as needed
        >
            <Text style={{ height: 30 }}>{allTextIsSet() ? "Can!!!" : "Can't :("}</Text>
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
                <TextInput
                    style={styles.input}
                    multiline={true}
                    onChangeText={setActivatingEventText}
                    value={activatingEventText} />
            </View>

            <View style={{ backgroundColor: allTextIsSet() ? "#00ff00" : "#ff0000" }}>
                <Pressable
                    disabled={!allTextIsSet()}
                    onPress={() => {
                        // TODO(austin.jones): make this into a model
                        const abc = {
                            activatingEvent: activatingEventText,
                            belief: beliefText,
                            consequences: consequencesText,
                            forAllBs: forAllBsText,
                            nextTime: nextTimeText,
                        }
                        dispatch(add(abc))
                        clearForm();
                    }}>
                    <MaterialIcons name="add" size={38} color="#25292e" />

                </Pressable></View>
        </KeyboardAwareScrollView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        width: '100%',
        padding: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center', // Adjusts for vertical alignment
        padding: 20,
    },
});

