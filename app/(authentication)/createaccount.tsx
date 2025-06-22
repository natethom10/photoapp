import { SafeAreaView } from "react-native-safe-area-context";
import CreateAccountBox from "../../components/authentication/CreateAccountBox";

export default function CreateAccount() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
      <CreateAccountBox />
    </SafeAreaView>
  );
}
