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

      <TextInput
        style={styles.input}
        multiline={true}
        maxLength={maxLength}
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
    borderWidth: debug ? 1 : 0,
  },
  labelContainer: {
    margin: 4,
    height: 100,
    borderWidth: debug ? 1 : 0,
  },
  label: {
    margin: 4,
    borderWidth: debug ? 1 : 0,
  },
  inputLimit: {
    margin: 4,
    width: 40,
    borderWidth: debug ? 1 : 0,
  },
  input: {
    flex: 1,
    height: 100,
    margin: 4,
    borderWidth: debug ? 1 : 0,
    borderRadius: 10,
    padding: 10,
  },
});
