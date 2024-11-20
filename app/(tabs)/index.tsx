import MainInputBox from "@/components/MainInputBox";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [testText, onTestTextChanged] = useState<string>("")
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{testText}</Text>

      <MainInputBox
        text={testText}
        onTextChanged={onTestTextChanged}
        placeHolder="something"
      />
    </View>
  );
}
