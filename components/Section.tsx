import { Theme } from '@/src/colors';
import { StyleSheet, Text, View } from 'react-native';

const debug = false;

type Props = {
    label: string;
    children: any;
};

export default function DisplayTextBox({ label, children }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <View style={styles.label}>
                    <Text style={styles.labelText}>
                        {label}
                    </Text>
                </View>
            </View>
            <View style={styles.childContainer}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
        borderRadius: 10,
    },
    childContainer: {
        width: "99%",
        margin: 5,
    },
    labelText: {
        color: Theme.accent,
        textDecorationLine: 'underline',
        fontSize: 20,
        fontStyle: 'italic',
    },
});
