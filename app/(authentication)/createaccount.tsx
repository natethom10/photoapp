import { SafeAreaView } from "react-native-safe-area-context";
import CreateAccountBox from "../../components/authentication/CreateAccountBox";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export default function CreateAccount() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
        <CreateAccountBox />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
