import { AbcEntry } from "@/src/AbcEntry";
import { Theme } from '@/src/colors';
import { DEV } from '@/src/dev';

import { StyleSheet, Text, View } from 'react-native';
const maxLength = 40;
const maxLengthSecondary = maxLength - 10;

type Props = {
    model: AbcEntry;
};

type LabelProps = {
    label: string;
    content: string;
    maxLength: number;
};

function LabeledString({ label, content, maxLength }: LabelProps) {
    let newlinePos = 0;

    for (; newlinePos < content.length && content[newlinePos] != '\n'; newlinePos++);;

    const cutLength = newlinePos > maxLength ? maxLength : newlinePos;

    return (
        <View style={styles.labeledStringContainer}>
            <Text style={styles.labelText}>
                {label}
            </Text>
            <Text style={styles.contentText}>
                {content.slice(0, cutLength)}
                {content.length > cutLength ? '...' : ''}
            </Text>
        </View>
    )
}

export default function EntryCard({ model }: Props) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>
                    {(new Date(model.dateCreated)).toLocaleString()}
                </Text>
            </View>
            {DEV && (
                <Text style={styles.devIdText}>id: {model.id}</Text>
            )}
            <LabeledString label="A:" maxLength={maxLength} content={model.activatingEvent} />
            <LabeledString label="B:" maxLength={maxLength} content={model.belief} />
            <LabeledString label="C:" maxLength={maxLength} content={model.consequences} />
            <LabeledString
                label="Do Bs Help:"
                maxLength={maxLengthSecondary}
                content={model.forAllBs} />
            <LabeledString
                label="Next Time:"
                maxLength={maxLengthSecondary}
                content={model.nextTime} />
        </View >
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        margin: 5,
        alignItems: 'flex-start',
        borderWidth: DEV ? 1 : 0,
        borderRadius: 10,
        backgroundColor: Theme.primary,
    },
    dateContainer: {
        flex: 1,
        margin: 5,
        height: 30,
        flexDirection: 'row',
        borderWidth: DEV ? 1 : 0,
    },
    labeledStringContainer: {
        marginLeft: 5,
        alignItems: 'flex-start',
        flexDirection: 'row',
        borderWidth: DEV ? 1 : 0,
    },
    dateText: {
        flex: 1,
        height: '100%',
        textAlign: 'right',
        color: Theme.text,
        borderWidth: DEV ? 1 : 0,
    },
    labelText: {
        color: Theme.textHold,
        margin: 5,
        borderWidth: DEV ? 1 : 0,
    },
    contentText: {
        color: Theme.text,
        margin: 5,
        borderWidth: DEV ? 1 : 0,
    },
    devIdText: {
        color: Theme.textHold,
        fontSize: 10,
        marginLeft: 5,
        marginBottom: 3,
    },
});
