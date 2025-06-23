import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginBox from "../../components/authentication/LoginBox";
import { useState } from "react";
import { loginWithIdentifier } from "@/scripts/handleLogin";
import { useRouter } from "expo-router";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

export default function Login() {
  const { colors } = useTheme();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    console.log("Submitted.");
    if (!username || !password) {
      setLoading(false);
      return;
    }
    const response = await loginWithIdentifier(username, password);
    if (response.success) {
      router.replace("/(app)/home");
    }
    console.log(response);
    setLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <LoginBox
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
