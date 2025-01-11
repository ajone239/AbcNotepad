import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Theme } from '@/src/colors';

type Props = {
    onPress: () => void;
    disabled: boolean;
};

export default function CircleButton({ onPress, disabled }: Props) {
    return (
        <View style={styles.circleButtonContainer}>
            <Pressable
                disabled={disabled}
                style={{
                    ...styles.circleButton,
                    backgroundColor: disabled ? Theme.background : Theme.accent,
                }}
                onPress={onPress}>
                <MaterialIcons name="add" size={38} color={disabled ? Theme.text : Theme.background} />
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 70,
        height: 70,
        borderWidth: 4,
        borderColor: Theme.primary,
        borderRadius: 35,
        padding: 3,
    },
    circleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
    },
});
