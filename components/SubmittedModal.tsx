import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Modal, View, StyleSheet, Text, Pressable } from "react-native";

type Props = {
    isVisible: boolean;
    onClose: () => void;
};

export default function SubmittedModal({ isVisible, onClose }: Props) {
    return (
        <View>
            <Modal visible={isVisible} transparent={true} animationType="slide">
                <View style={styles.modalContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Thanks for sharing</Text>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name="close" color="#fff" size={22} />
                        </Pressable>
                    </View>
                </View>

            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        height: '25%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        height: '16%',
        backgroundColor: '#464C55',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 16,
    },
});
