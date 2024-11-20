import { StyleSheet, TextInput, View } from 'react-native';

type Props = {
  text: string;
  placeHolder: string;
  onTextChanged: () => void;
};

export default function MainInputBox({ text, placeHolder, onTextChanged }: Props) {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.label}>
        Test:
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onTextChanged}
        placeholder={placeHolder}
        placeholderTextColor='#aaa'
        value={text} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    padding: 10,
  },
  label: {
    gap: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

