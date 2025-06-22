import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginBox from "../../components/authentication/LoginBox";
import { useState } from "react";

export default function Login() {
  const { colors } = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <LoginBox
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    </SafeAreaView>
  );
}
