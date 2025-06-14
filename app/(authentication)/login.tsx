import { useTheme } from "@react-navigation/native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Login() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>Login</Text>
      <Link
        href="/createaccount"
        asChild
        style={{ borderColor: colors.text, borderWidth: 1, padding: 10 }}
      >
        <Text style={{ color: colors.text }}>Create Account</Text>
      </Link>
      <Link
        href="/forgotpassword"
        asChild
        style={{ borderColor: colors.text, borderWidth: 1, padding: 10 }}
      >
        <Text style={{ color: colors.text }}>Forgot Account</Text>
      </Link>
      <Link
        href="/verifyemail"
        asChild
        style={{ borderColor: colors.text, borderWidth: 1, padding: 10 }}
      >
        <Text style={{ color: colors.text }}>Submit</Text>
      </Link>
    </SafeAreaView>
  );
}
