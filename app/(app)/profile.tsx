import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { handleLogout } from "../../scripts/handleLogOut";

export default function Profile() {
  const { colors } = useTheme();
  const router = useRouter();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => router.push("/(app)/home")}>
        <Text style={{ color: colors.text }}>Back</Text>
      </TouchableOpacity>
      <Text style={{ color: colors.text }}>Profile Settings and Shit</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={{ color: colors.text }}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
