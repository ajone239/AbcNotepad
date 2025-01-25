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

            <TextInput
                style={styles.input}
                multiline={true}
                maxLength={maxLength}
                onChangeText={onTextChanged}
                placeholder={placeHolder}
                placeholderTextColor={Theme.textHold}
                value={text} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingBottom: 6,
        borderWidth: debug ? 1 : 0,
    },
    labelContainer: {
        height: 100,
        marginRight: 8,
        borderWidth: debug ? 1 : 0,
    },
    label: {
        margin: 5,
        borderWidth: debug ? 1 : 0,
        backgroundColor: Theme.primary,
        borderRadius: 10,
    },
    inputLimit: {
        margin: 4,
        width: 45,
        borderWidth: debug ? 1 : 0,
        backgroundColor: Theme.primary,
        borderRadius: 10,
    },
    input: {
        flex: 1,
        height: 100,
        margin: 4,
        borderWidth: debug ? 1 : 0,
        borderRadius: 10,
        padding: 10,
        backgroundColor: Theme.primary,
        width: "99%",
        color: Theme.text,
    },
    labelText: {
        color: Theme.text,
        margin: 5,
    },
    inputLimitText: {
        color: Theme.textHold,
        margin: 5,
    },
});
