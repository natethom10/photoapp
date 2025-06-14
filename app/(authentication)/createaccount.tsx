import { useTheme } from "@react-navigation/native";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateAccountBox from "./components/CreateAccountBox";

export default function CreateAccount() {
  const { colors } = useTheme();
  return (
    <SafeAreaView>
      <CreateAccountBox />
    </SafeAreaView>
  );
}