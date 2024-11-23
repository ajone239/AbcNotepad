import MainInputBox from "@/components/MainInputBox";
import OtherInputBox from "@/components/OtherInputBox";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
} from "react-native";

export default function Index() {
  const [activatingEventText, setActivatingEventText] = useState<string>("")
  const [beliefText, setBeliefText] = useState<string>("")
  const [consequencesText, setConsequencesText] = useState<string>("")
  const [forAllBsText, setForAllBsText] = useState<string>("")
  const [nextTimeText, setNextTimeText] = useState<string>("")

  const [canSubmit, setCanSubmit] = useState<boolean>(false)

  const allTextIsSet = () => {
    return activatingEventText.length > 0 &&
      beliefText.length > 0 &&
      consequencesText.length > 0 &&
      forAllBsText.length > 0 &&
      nextTimeText.length > 0;
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjusts for keyboard
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Offset for header height
    >
      <TouchableWithoutFeedback onPress={
        (e) => {
          // Check if the touch event happened outside the WebView
          if (e.target === e.currentTarget) {
            Keyboard.dismiss();
          }
        }
      }>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled" // Allows taps to dismiss the keyboard
        >
          <View style={styles.inner}>
            <View style={styles.input} >
              <MainInputBox
                text={activatingEventText}
                label="A:"
                onTextChanged={(text: string) => {
                  setActivatingEventText(text)
                  setCanSubmit(allTextIsSet())
                }}
                placeHolder="What happened?"
              />
            </View>

            <View style={styles.input} >
              <MainInputBox
                text={beliefText}
                label="B:"
                onTextChanged={(text: string) => {
                  setBeliefText(text)
                  setCanSubmit(allTextIsSet())
                }}
                placeHolder="What are your beliefs for the event?"
              />
            </View>

            <View style={styles.input} >
              <MainInputBox
                text={consequencesText}
                label="C:"
                onTextChanged={(text: string) => {
                  setConsequencesText(text)
                  setCanSubmit(allTextIsSet())
                }}
                placeHolder="What are the consequences?"
              />
            </View>

            <View style={styles.input} >
              <OtherInputBox
                text={forAllBsText}
                label="For all b in B: b.helpful || b.realistic:"
                onTextChanged={(text: string) => {
                  setForAllBsText(text)
                  setCanSubmit(allTextIsSet())
                }}
                placeHolder="Think for a friend"
              />
            </View>

            <View style={styles.input} >
              <OtherInputBox
                text={nextTimeText}
                label="What will you do next time?"
                onTextChanged={(text: string) => {
                  setNextTimeText(text)
                  setCanSubmit(allTextIsSet())
                }}
                placeHolder="Plan here"
              />
            </View>

            <Text style={{ height: 30 }}>{activatingEventText}</Text>
            <Text style={{ height: 30 }}>{allTextIsSet() ? "Can!!!" : "Can't :("}</Text>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center', // Adjusts for vertical alignment
    padding: 20,
  },
});

