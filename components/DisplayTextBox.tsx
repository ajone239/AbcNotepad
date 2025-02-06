import { Theme } from '@/src/colors';
import { StyleSheet, Text, View } from 'react-native';

const debug = false;

type Props = {
    text: string;
    label: string;
};

export default function DisplayTextBox({ text, label }: Props) {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
                <View style={styles.label}>
                    <Text style={styles.labelText}>
                        {label}
                    </Text>
                </View>
            </View>

            <View style={styles.textInputContainer}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        margin: 5,
        borderWidth: debug ? 1 : 0,
    },
    labelContainer: {
        width: "99%",
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'flex-end',
        borderWidth: debug ? 1 : 0,
    },
    label: {
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
    text: {
        flex: 1,
        margin: 5,
        borderWidth: debug ? 1 : 0,
        color: Theme.accentText,
    },
});
