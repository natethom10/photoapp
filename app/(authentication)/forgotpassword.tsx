import { SafeAreaView } from "react-native-safe-area-context";
import ForgotPasswordBox from "../../components/authentication/ForgotPasswordBox";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export default function ForgotPassword() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView>
        <ForgotPasswordBox />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
