import { Theme } from '@/src/colors';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const debug = false;
const maxLength = 140;

type Props = {
    text: string;
    label: string;
    placeHolder: string;
    onTextChanged: (text: string) => void;
};

export default function InputBox({ text, label, placeHolder, onTextChanged }: Props) {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
                <View style={styles.label}>
                    <Text style={styles.labelText}>
                        {label}
                    </Text>
                </View>

                <View style={styles.inputLimit}>
                    <Text style={styles.inputLimitText}>
                        {text.length} / {maxLength}
                    </Text>
                </View>
            </View>

            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    maxLength={maxLength}
                    onChangeText={onTextChanged}
                    placeholder={placeHolder}
                    placeholderTextColor={Theme.accentTextHold}
                    value={text} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        borderWidth: debug ? 1 : 0,
    },
    labelContainer: {
        flex: 1,
        marginBottom: 5,
        width: "99%",
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'flex-end',
        borderWidth: debug ? 1 : 0,
    },
    label: {
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: debug ? 1 : 0,
        backgroundColor: Theme.accent,
        borderRadius: 10,
    },
    inputLimit: {
        margin: 5,
        borderWidth: debug ? 1 : 0,
        backgroundColor: Theme.accent,
        borderRadius: 10,
    },
    textInputContainer: {
        flex: 1,
        width: "99%",
        margin: 10,
        borderWidth: debug ? 1 : 0,
        backgroundColor: Theme.accent,
        borderRadius: 10,
    },
    labelText: {
        color: Theme.accentText,
        margin: 5,
    },
    inputLimitText: {
        color: Theme.accentText,
        margin: 5,
    },
    input: {
        flex: 1,
        width: "99%",
        margin: 5,
        borderWidth: debug ? 1 : 0,
        color: Theme.accentText,
    },
});
