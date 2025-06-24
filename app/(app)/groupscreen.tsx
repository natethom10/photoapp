import { useTheme } from "@react-navigation/native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/app/Header";

export default function GroupScreen() {
  const { colors } = useTheme();
  return (
    <SafeAreaView>
      <Header />
      <Text style={{ color: colors.text }}>Group Screen!</Text>
    </SafeAreaView>
  );
}
