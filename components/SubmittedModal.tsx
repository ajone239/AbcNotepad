import { Theme } from "@/src/colors";
import { Modal, View, StyleSheet, Text, Pressable } from "react-native";

type Props = {
    isVisible: boolean;
    onClose: () => void;
};

export default function SubmittedModal({ isVisible, onClose }: Props) {
    return (
        <Modal visible={isVisible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Thanks for sharing</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.buttonContainer}>
                            <Pressable onPress={onClose} style={styles.button}>
                                <Text style={styles.buttonText}>
                                    Dismiss
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        height: '20%',
        width: '66%',
        backgroundColor: Theme.accent,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Theme.textHold,
    },
    titleContainer: {
        height: '16%',
        backgroundColor: Theme.primary,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.background,
    },
    button: {
        marginVertical: 5,
        marginHorizontal: 30,
        color: Theme.text,
    },
    buttonText: {
        color: Theme.text,
        fontSize: 16,
    },
    title: {
        color: Theme.text,
        fontSize: 16,
    },
});
