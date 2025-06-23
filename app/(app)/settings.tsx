import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function Settings() {
  const { colors } = useTheme();
  return (
    <SafeAreaView>
      <Text style={{ color: colors.text }}>Settings!</Text>
    </SafeAreaView>
  );
}
