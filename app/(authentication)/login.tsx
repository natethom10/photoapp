import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginBox from "../../components/authentication/LoginBox";
import { useState } from "react";
import { loginWithIdentifier } from "@/scripts/handleLogin";
import { useRouter } from "expo-router";
import { TouchableWithoutFeedback, Keyboard, Text } from "react-native";

export default function Login() {
  const { colors } = useTheme();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    if (!username || !password) {
      setError("Please fill out all fields.");
      setLoading(false);
      return;
    }
    const response = await loginWithIdentifier(username, password);
    if (response.success) {
      setError("");
      router.replace("/(app)/home");
    } else {
      switch (response.code) {
        case "user-not-found":
        case "auth/invalid-credential":
          setError("Invalid username or password");
          break;
        case "auth/user-disabled":
          setError("User account disabled.");
          break;
        case "auth/network-request-failed":
          setError("Network error. Please connect to the internet.");
          break;
        case "auth/too-many-requests":
          setError("Too many attempts. Please try again later.");
          break;
        default:
          setError(response.message ?? "Error. Please try again.");
      }
    }
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
          error={error}
          setError={setError}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
