import { Theme } from "@/src/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
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
                        <Text style={styles.title}>
                            Thanks for sharing
                        </Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.emojiContainer}>
                            <Ionicons name="happy-outline" color={Theme.background} size={75} />
                        </View>
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
        height: '30%',
        width: '66%',
        backgroundColor: Theme.accent,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Theme.textHold,
    },
    titleContainer: {
        height: '20%',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emojiContainer: {
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.background,
    },
    button: {
        marginVertical: 10,
        marginHorizontal: 40,
        color: Theme.text,
    },
    buttonText: {
        color: Theme.text,
        fontSize: 18,
    },
    title: {
        color: Theme.background,
        textAlign: 'center',
        fontSize: 22,
    },
});
