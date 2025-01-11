import { StyleSheet, Text, TextInput, View } from 'react-native';

const debug = true;
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
                    <Text>
                        {label}
                    </Text>
                </View>

                <View style={styles.inputLimit}>
                    <Text>
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
                    placeholderTextColor='#aaa'
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
        margin: 5,
        flex: 1,
        width: "99%",
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderWidth: debug ? 1 : 0,
    },
    label: {
        margin: 5,
        borderWidth: debug ? 1 : 0,
    },
    inputLimit: {
        margin: 5,
        borderWidth: debug ? 1 : 0,
    },
    textInputContainer: {
        flex: 1,
        width: "99%",
        margin: 5,
        borderWidth: debug ? 1 : 0,
        borderRadius: 10,
    },
    input: {
        flex: 1,
        width: "99%",
        margin: 5,
        borderWidth: debug ? 1 : 0,
    },
});
